import { HttpService } from "@nestjs/axios";
import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import type { IIdpService } from "./interfaces/idp.service";
import type { IdpUserProfile } from "./types/idp-profile.type";

@Injectable()
export class Auth0Service implements IIdpService {
  private readonly userInfoUrl: string =
    `${process.env.AUTH0_ISSUER_URL}/userinfo`;

  constructor(private readonly httpService: HttpService) {}

  async fetchUserProfile(token: string): Promise<IdpUserProfile> {
    const res = await firstValueFrom(
      this.httpService.get<IdpUserProfile>(this.userInfoUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    if (res.status === 400 || res.status === 401) {
      throw new UnauthorizedException("Invalid or expired token");
    }

    if (res.status !== 200) {
      throw new BadGatewayException(
        `Auth0 service error: ${res.status} ${res.statusText}`,
      );
    }

    return res.data;
  }
}
