import type { SaveUserDTO } from "../dto/save.user.dto";
import { UserDTO } from "../dto/user.dto";
import { User } from "../domain/entities/user.entity";
import { UserStatus } from "@prisma/client";

export class UserFactory {
  static toEntityFromSaveDTOWithIdStatus(
    id: string,
    status: UserStatus,
    d: SaveUserDTO,
  ): User {
    return new User(
      id,
      d.getSub(),
      d.getEmail(),
      d.getFamilyName(),
      d.getGivenName(),
      status,
    );
  }
}
