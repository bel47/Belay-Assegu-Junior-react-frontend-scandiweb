import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import * as queries from '../GraphQL/Queries';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) { alert(`[Network error]: ${networkError}`) }
});

const link = from([
    errorLink,
    new HttpLink({
        uri: 'http://localhost:4000/',
    })
]);

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
};
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    link: link
});

const fetchProductsAPI = async (category) => {
    const result = await client.query({
        query: queries.GET_PRODUCTS_BY_CATAGORY,
        variables: { title: category },
    });
    return result;
};

const fetchCurrenciesAPI = async () => {
    const result = await client.query({ query: queries.GET_CURRENCIES });
    return result;
};

const fetchCategoriesAPI = async () => {
    const result = await client.query({ query: queries.GET_CATAGORIS });
    return result;
};

const fetchProductAPI = async (id) => {
    const result = await client.query({
        query: queries.GET_PRODUCT,
        variables: { id: id },
    });
    return result;
};

export {
    fetchProductsAPI,
    fetchCurrenciesAPI,
    fetchCategoriesAPI,
    fetchProductAPI,
};
