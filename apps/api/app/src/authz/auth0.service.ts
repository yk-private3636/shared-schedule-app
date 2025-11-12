import { HttpService } from "@nestjs/axios";
import { IIdpService } from "./interfaces/idp.service.interface";
import { IdpUserProfile } from "./types/idp-profile.type";
import { firstValueFrom } from 'rxjs';
import { Injectable } from "@nestjs/common";

@Injectable()
export class Auth0Service implements IIdpService {

    private readonly userInfoUrl: string = `${process.env.AUTH0_ISSUER_URL}/userinfo`;

    constructor(
        private readonly httpService: HttpService,
    ) {}

    async getUserProfile(token: string): Promise<IdpUserProfile> {
        const res = await firstValueFrom(
            this.httpService.get<IdpUserProfile>(this.userInfoUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        );

        return res.data;
    }
}