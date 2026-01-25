import { RelationshipDefaultCategoryStatus } from "@prisma/client";

export interface DefaultCategoriesQuery {
  id: number;
  name: string;
  status: RelationshipDefaultCategoryStatus;
}
