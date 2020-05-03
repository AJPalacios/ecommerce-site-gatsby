import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Products from '../components/Products';


export default (props) => {

	const { nodes: products } = props.data.allStripeProduct;

	return (
		<Layout>
				<Products products={products} />
		</Layout>
	);
}

export const pageQuery = graphql`
	{
		allStripeProduct {
			nodes {
				id
				name
			}
		}
	}
`;
