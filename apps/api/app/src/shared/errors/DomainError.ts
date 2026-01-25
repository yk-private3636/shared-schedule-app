import { IDomainError } from "../types/error";

export class DomainError<T extends string = string>
  extends Error
  implements IDomainError
{
  constructor(
    public message: string,
    public readonly code: T,
  ) {
    super(message);
  }

  getCode(): T {
    return this.code;
  }
}
