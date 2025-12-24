import { GraphQLClient } from "graphql-request";

let client: GraphQLClient | null = null;

export function gqlClientFactory(accessToken: string): GraphQLClient {
  if (client === null) {
    const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
    if (!endpoint) {
      throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not defined");
    }
    client = new GraphQLClient(endpoint);
  }

  client.setHeader("Authorization", `Bearer ${accessToken}`);

  return client;
}
