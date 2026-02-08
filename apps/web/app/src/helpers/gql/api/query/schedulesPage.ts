import { graphql } from "@/types/graphql";
import { gqlClientFactory } from "../../client";

export async function getSchedulesPageQuery(accessToken: string) {
  const client = gqlClientFactory(accessToken);

  const doc = graphql(`
        query GetSchedulesPage {
            categories {
                isCustomized
                details {
                    id
                    name
                    kind
                    status
                }
            }
        }
    `);

  const res = await client.request(doc);

  return res;
}
