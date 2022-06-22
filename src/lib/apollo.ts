import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4prn6192jco01z4h67d2ot6/master",
  cache: new InMemoryCache(),
});
