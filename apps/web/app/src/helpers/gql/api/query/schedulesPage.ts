import { graphql } from "@/types/graphql";
import { gqlClientFactory } from "../../client";

export async function getSchedulesPageQuery(accessToken: string) {
  const client = gqlClientFactory(accessToken);

  const doc = graphql(`
        query GetSchedulesPage {
            isCategoryCustomized
            categories {
                id,
                name,
                status
            }
        }
    `);

  const res = await client.request(doc);

  return res;
}
