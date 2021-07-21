import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.8base.com/ckqwz2bty00jl08jpfhm1882m",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer 3931c895-66a9-4b94-8bfd-4fd0b36bfd54",
  },
});
