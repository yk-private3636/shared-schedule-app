import { IdpUserProfile } from "@/authz/types/idp-profile.type";
import { CreateUserDTO } from "../dto/create.user.dto";

export class UserDTOFactory {
    static toCreateDtoFromIdpProfile(profile: IdpUserProfile): CreateUserDTO {
        return new CreateUserDTO(
            profile.sub,
            profile.email,
            profile.family_name,
            profile.given_name
        );
    }
}