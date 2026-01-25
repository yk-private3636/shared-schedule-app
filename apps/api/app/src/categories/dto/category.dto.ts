import {
  RelationshipCategoryKind,
  RelationshipCategoryStatus,
} from "@prisma/client";

export class CategoryDTO {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly userId: string,
    private readonly kind: RelationshipCategoryKind,
    private readonly status: RelationshipCategoryStatus,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getKind(): RelationshipCategoryKind {
    return this.kind;
  }

  public getStatus(): RelationshipCategoryStatus {
    return this.status;
  }
}
