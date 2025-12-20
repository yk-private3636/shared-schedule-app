import { IdpUserProfile } from '@/authz/types/idp-profile.type';
import { SaveUserDTO } from '../dto/save.user.dto';

export class UserDTOFactory {
  static toSaveDtoFromIdpProfile(profile: IdpUserProfile): SaveUserDTO {
    return new SaveUserDTO(
      profile.sub,
      profile.email,
      profile.family_name,
      profile.given_name,
    );
  }
}
