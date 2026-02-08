import { graphql } from "@/types/graphql";
import { gqlClientFactory } from "../../client";
import { CreateCategoriesInput } from "@/types/graphql/graphql";

export async function createCategories(
  input: CreateCategoriesInput,
  accessToken: string,
) {
  const client = gqlClientFactory(accessToken);
  const doc = graphql(`
        mutation createCategories($createCategoriesInput: CreateCategoriesInput!) {
            createCategories(createCategoriesInput: $createCategoriesInput) {
                details {
                    id
                    name
                    kind
                    status
                } 
            }
        }
    `);

  const res = await client.request(doc, { createCategoriesInput: input });

  return res;
}
