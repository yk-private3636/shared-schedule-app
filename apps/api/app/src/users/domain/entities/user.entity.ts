export class User {
  constructor(
    private readonly id: string,
    private readonly sub: string,
    private readonly email: string,
    private readonly familyName: string,
    private readonly givenName: string,
  ) {}

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
}
