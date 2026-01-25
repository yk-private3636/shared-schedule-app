import type { IdpUserProfile } from "@/authz/types/idp-profile.type";
import { SaveUserDTO } from "../dto/save.user.dto";
import { UserDTO } from "../dto/user.dto";
import { User } from "../domain/entities/user.entity";

export class UserDTOFactory {
  static toDtoFromEntity(user: User): UserDTO {
    return new UserDTO(
      user.getId(),
      user.getEmail(),
      user.getFamilyName(),
      user.getGivenName(),
      user.getStatus(),
    );
  }

  static toSaveDtoFromIdpProfile(profile: IdpUserProfile): SaveUserDTO {
    return new SaveUserDTO(
      profile.sub,
      profile.email,
      profile.family_name,
      profile.given_name,
    );
  }
}
