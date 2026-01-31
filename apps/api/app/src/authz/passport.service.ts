import { type IDatabaseClientService } from "@/shared/interfaces/database-client.service";
import { TYPES } from "@/users/constants/di";
import { TYPES as SharedTYPES } from "@/shared/constants/di";
import { type IUsersRepository } from "@/users/interfaces/users.repository";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { passportJwtSecret } from "jwks-rsa";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class PassportService extends PassportStrategy(Strategy) {
  constructor(
    @Inject(TYPES.UsersRepository)
    private readonly usersRepository: IUsersRepository,
    @Inject(SharedTYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_ISSUER_URL}/`,
      algorithms: ["RS256"],
    });
  }

  async validate(payload: { sub: string }): Promise<unknown> {
    const userId = await this.dbClient.reader(async (tx) => {
      const user = await this.usersRepository.findBySub(payload.sub, tx);
      if (user === null) {
        return null;
      }
      return user.getId();
    });

    if (userId === null) {
      throw new UnauthorizedException("User not found");
    }

    return { id: userId };
  }
}
