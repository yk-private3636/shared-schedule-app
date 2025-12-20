import { IdpUserProfile } from '../types/idp-profile.type';

export interface IIdpService {
  getUserProfile(token: string): Promise<IdpUserProfile>;
}
