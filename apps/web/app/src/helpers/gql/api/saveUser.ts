import { graphql } from "@/types/graphql";
import { gqlClientFactory } from "../client";

export async function saveUser(accessToken: string) {
  const client = gqlClientFactory(accessToken);

  const doc = graphql(`
      mutation SaveUser {
        saveUser {
          id
          email
          givenName
          familyName
          status
        }
      }
    `);

  const res = await client.request(doc);

  return res.saveUser;
}
