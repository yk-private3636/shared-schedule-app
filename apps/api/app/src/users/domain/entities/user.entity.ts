import { UserStatus } from "@prisma/client"; // enumに関してはimportすることを許す
import { UserCannotBeUpdatedError } from "../errors/UserCannotBeUpdatedError";

export class User {
  constructor(
    private id: string,
    private sub: string,
    private email: string,
    private familyName: string,
    private givenName: string,
    private status: UserStatus,
  ) {}

  public updateProfile(
    email: string,
    familyName: string,
    givenName: string,
  ): void {
    if (this.status !== "ACTIVE") {
      throw new UserCannotBeUpdatedError();
    }

    this.email = email;
    this.familyName = familyName;
    this.givenName = givenName;
  }

  public getId(): string {
    return this.id;
  }

  public getSub(): string {
    return this.sub;
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
