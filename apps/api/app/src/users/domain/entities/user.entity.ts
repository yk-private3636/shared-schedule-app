import { UserStatus } from "@prisma/client"; // enumに関してはimportすることを許す
import { UserCannotBeUpdatedError } from "../errors/UserCannotBeUpdatedError";
import { UserActivationError } from "../errors/UserActivationError";

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
    if (this.isActive() === false) {
      throw new UserCannotBeUpdatedError(this.id);
    }

    this.email = email;
    this.familyName = familyName;
    this.givenName = givenName;
  }

  public activate(): void {
    if (this.isBanned()) {
      throw new UserActivationError(this.id);
    }

    this.status = "ACTIVE";
  }

  public isActive(): boolean {
    return this.status === "ACTIVE";
  }

  public isSuspended(): boolean {
    return this.status === "SUSPENDED";
  }

  public isBanned(): boolean {
    return this.status === "BANNED";
  }

  public isWithdrawn(): boolean {
    return this.status === "WITHDRAWN";
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
