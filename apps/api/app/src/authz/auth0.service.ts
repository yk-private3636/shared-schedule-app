import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import type { IIdpService } from "./interfaces/idp.service.interface";
import type { IdpUserProfile } from "./types/idp-profile.type";

@Injectable()
export class Auth0Service implements IIdpService {
  private readonly userInfoUrl: string =
    `${process.env.AUTH0_ISSUER_URL}/userinfo`;

  constructor(private readonly httpService: HttpService) {}

  async getUserProfile(token: string): Promise<IdpUserProfile> {
    const res = await firstValueFrom(
      this.httpService.get<IdpUserProfile>(this.userInfoUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    return res.data;
  }
}
