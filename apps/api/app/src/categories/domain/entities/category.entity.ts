import {
  RelationshipCategoryKind,
  RelationshipCategoryStatus,
} from "@prisma/client";

export class Category {
  constructor(
    private id: string,
    private name: string,
    private userId: string,
    private kind: RelationshipCategoryKind,
    private status: RelationshipCategoryStatus,
  ) {}

  public isActive(): boolean {
    return this.status === RelationshipCategoryStatus.ACTIVE;
  }

  public isInactive(): boolean {
    return this.status === RelationshipCategoryStatus.INACTIVE;
  }

  public isArchived(): boolean {
    return this.status === RelationshipCategoryStatus.ARCHIVED;
  }

  public isDefault(): boolean {
    return this.kind === RelationshipCategoryKind.DEFAULT;
  }

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
