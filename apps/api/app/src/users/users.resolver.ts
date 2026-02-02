import { Inject } from "@nestjs/common";
import { Context, Mutation, Resolver } from "@nestjs/graphql";
import { TYPES } from "@/authz/constants/di";
import type { IIdpService } from "@/authz/interfaces/idp.service";
import { UserDTOFactory } from "./factories/user.dto.factory";
import { UsersService } from "./users.service";
import { UserGQL } from "./dto/gql.dto";
import { User } from "./domain/entities/user.entity";
import { UserGqlFactory } from "./factories/user.gql.factory";

@Resolver(() => UserGQL)
export class UsersResolver {
  constructor(
    @Inject(TYPES.IdpService)
    private readonly idpService: IIdpService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => UserGQL)
  async saveUser(@Context() ctx: { req: Request }): Promise<UserGQL> {
    const accessToken = (
      (ctx.req.headers["authorization"] ?? "") as string
    ).replace("Bearer ", "");

    const idpUserProfile = await this.idpService.fetchUserProfile(accessToken);

    const saveUserDTO = UserDTOFactory.FromIdpProfileToSaveDto(idpUserProfile);

    const userDTO = await this.usersService.save(saveUserDTO);

    return UserGqlFactory.fromUserDTO(userDTO);
  }
}
