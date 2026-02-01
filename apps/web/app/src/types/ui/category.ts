import {
  RelationshipCategoryStatus,
  RelationshipCategoryKind,
} from "../graphql/graphql";

export interface CategoryTab {
  id: string;
  name: string;
  isActive: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  status: RelationshipCategoryStatus;
  kind: RelationshipCategoryKind;
}
