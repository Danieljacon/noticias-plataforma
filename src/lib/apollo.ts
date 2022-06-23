import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "endereço API",
    cache: new InMemoryCache(),
});