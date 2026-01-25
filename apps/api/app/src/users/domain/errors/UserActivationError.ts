import { DomainError } from "@/shared/errors/DomainError";
import { response } from "shared";

export class UserActivationError extends DomainError<response.UserErrorCode> {
  constructor(userId: string) {
    super(`User(${userId}) cannot be activated`, "USER_ACTIVATION_ERROR");
  }
}
