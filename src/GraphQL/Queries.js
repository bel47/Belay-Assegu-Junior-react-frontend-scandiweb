import { gql } from "@apollo/client";

export const GET_CATAGORIS = gql`
    query getCategories{
        categories {
            name
        }
    }
    `;

export const GET_CURRENCIES = gql`
    query {
        currencies {
            label
            symbol
        }
    }
  `;

export const GET_PRODUCT = gql`
    query FetchProduct($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    id
                    value
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
            brand

        }
    }
    `;

export const GET_PRODUCTS_BY_CATAGORY = gql`
    query getProducts ($title: String!){
        category(input: {title: $title}) {
            products {
                id
                name
                brand
                inStock
                gallery
                prices {
                    currency {
                        symbol  
                    }
                    amount
                }
                attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
            }
        }
    }
`;

