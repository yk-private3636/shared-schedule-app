import { DomainError } from "@/shared/errors/DomainError";
import { response } from "shared";

export class UserCannotBeUpdatedError extends DomainError<response.UserErrorCode> {
  constructor(userId: string) {
    super(`User(${userId}) cannot be updated`, "USER_CANNOT_BE_UPDATED_ERROR");
  }
}
