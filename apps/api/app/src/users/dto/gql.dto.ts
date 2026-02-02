import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { UserStatus } from "@prisma/client";

@ObjectType()
export class UserGQL {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  familyName: string;

  @Field()
  givenName: string;

  @Field(() => UserStatus)
  status: UserStatus;
}

registerEnumType(UserStatus, {
  name: "UserStatus",
  description: "The status of a user.",
});
