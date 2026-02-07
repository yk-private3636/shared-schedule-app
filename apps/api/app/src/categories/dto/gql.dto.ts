import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import {
  RelationshipCategoryKind,
  RelationshipCategoryStatus,
} from "@prisma/client";

@ObjectType()
export class CategoryGQL {
  @Field()
  id: string; // カテゴリーID
  @Field()
  name: string; // カテゴリー名
  @Field()
  userId: string; // ユーザーID
  @Field(() => RelationshipCategoryKind)
  kind: RelationshipCategoryKind; // カテゴリー種別
  @Field(() => RelationshipCategoryStatus)
  status: RelationshipCategoryStatus; // カテゴリーステータス
}

@InputType()
export class CreateCategoriesInput {
  @Field(() => [SyncCategoryGQL])
  categories: SyncCategoryGQL[];
}

@InputType()
export class SyncCategoryGQL {
  @Field()
  id: string; // カテゴリーID
  @Field()
  name: string; // カテゴリー名
  @Field(() => RelationshipCategoryKind)
  kind: RelationshipCategoryKind; // カテゴリー種別
  @Field(() => RelationshipCategoryStatus)
  status: RelationshipCategoryStatus; // カテゴリーステータス
}

registerEnumType(RelationshipCategoryKind, {
  name: "RelationshipCategoryKind",
  description: "The kind of a category.",
});

registerEnumType(RelationshipCategoryStatus, {
  name: "RelationshipCategoryStatus",
  description: "The status of a category.",
});
