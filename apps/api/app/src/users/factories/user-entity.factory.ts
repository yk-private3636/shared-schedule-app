import { generateUUID } from "@/shared/helpers/uuid";
import type { SaveUserDTO } from "../dto/save.user.dto";
import { UserDTO } from "../dto/user.dto";
import { User } from "../domain/entities/user.entity";

export class UserFactory {
  static toDtoFromEntity(user: User): UserDTO {
    return new UserDTO(
      user.getId(),
      user.getEmail(),
      user.getFamilyName(),
      user.getGivenName(),
    );
  }

  static toEntityFromSaveDTO(d: SaveUserDTO): User {
    return new User(
      generateUUID(),
      d.getSub(),
      d.getEmail(),
      d.getFamilyName(),
      d.getGivenName(),
    );
  }

  static toEntityFromSaveDTOWithId(user: User, id: string): User {
    return new User(
      id,
      user.getSub(),
      user.getEmail(),
      user.getFamilyName(),
      user.getGivenName(),
    );
  }
}
