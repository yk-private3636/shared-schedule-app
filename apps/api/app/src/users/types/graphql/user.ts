import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  familyName: string;

  @Field()
  givenName: string;
}