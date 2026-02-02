import { UserGQL } from "../dto/gql.dto";
import { UserDTO } from "../dto/user.dto";

export class UserGqlFactory {
  static fromUserDTO(d: UserDTO): UserGQL {
    return {
      id: d.getId(),
      email: d.getEmail(),
      familyName: d.getFamilyName(),
      givenName: d.getGivenName(),
      status: d.getStatus(),
    };
  }
}
