import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

// we could use props but i will destructure the values to just what we need
export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// This query will magically be set as props for our function via gatsby
export const query = graphql`
  query PizzaQuery {
    # named query output
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(height: 200, width: 200) {
              ...GatsbySanityImageFixed
            }

            fluid(maxWidth: 400) {
              # this fragment will not work in graphiql tool but is part of gatsby
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
