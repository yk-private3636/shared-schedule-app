import type { IdpUserProfile } from "../types/idp-profile.type";

export interface IIdpService {
  fetchUserProfile(token: string): Promise<IdpUserProfile>;
}
