import { generateUUID } from "@/shared/helpers/uuid";
import { CreateUserDTO } from "../dto/create.user.dto";
import { User } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";

export class UserFactory {
    static toEntityFromCreateDTO(d: CreateUserDTO): User {
        return new User(
            generateUUID(),
            d.getSub(),
            d.getEmail(),
            d.getFamilyName(),
            d.getGivenName()
        );
    }

    static toDtoFromEntity(user: User): UserDTO {
        return new UserDTO(
            user.getId(),
            user.getEmail(),
            user.getFamilyName(),
            user.getGivenName()
        );
    }
}