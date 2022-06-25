import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4rip3b214ke01wga7qr17ek/master",
    cache: new InMemoryCache(),
});