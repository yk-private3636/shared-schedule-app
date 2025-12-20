import { GraphQLClient } from "graphql-request";

let client: GraphQLClient | null = null;

export function gqlClientFactory(accessToken: string): GraphQLClient {

    if (client === null) {
        client = new GraphQLClient(
            process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
        );    
    }

    client.setHeader("Authorization", `Bearer ${accessToken}`);

    return client;
}