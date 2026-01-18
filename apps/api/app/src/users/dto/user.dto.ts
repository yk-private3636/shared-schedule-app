import { UserStatus } from "@prisma/client";

export class UserDTO {
  constructor(
    private readonly id: string,
    private readonly email: string,
    private readonly familyName: string,
    private readonly givenName: string,
    private readonly status: UserStatus,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getFamilyName(): string {
    return this.familyName;
  }

  public getGivenName(): string {
    return this.givenName;
  }

  public getStatus(): UserStatus {
    return this.status;
  }
}
