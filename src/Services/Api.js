import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import * as queries from '../GraphQL/Queries';

const errorLink = onError((graphqlErrors, networkError) => {
    if (graphqlErrors) {
        graphqlErrors.map((msg, location, path) => {
            alert(`Graphql err ${msg}`);
        })
    }
});

const link = from([
    errorLink,
    new HttpLink({
        uri: 'http://localhost:4000/',
    })
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
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
