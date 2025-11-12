export interface Auth0UserProfile {
  sub: string;
  family_name: string;
  given_name: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
}