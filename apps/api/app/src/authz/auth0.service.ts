import { HttpService } from "@nestjs/axios";
import { IIdpService } from "./interfaces/idp.service.interface";
import { Auth0UserProfile } from "./types/auth0.type";
import { firstValueFrom } from 'rxjs';
import { Injectable } from "@nestjs/common";

@Injectable()
export class Auth0Service implements IIdpService<Auth0UserProfile> {

    private readonly userInfoUrl: string = `${process.env.AUTH0_ISSUER_URL}/userinfo`;

    constructor(
        private readonly httpService: HttpService,
    ) {}

    async getUserInfo(accessToken: string): Promise<Auth0UserProfile> {
        const res = await firstValueFrom(
            this.httpService.get<Auth0UserProfile>(this.userInfoUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
        );

        return res.data;
    }
}