import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Product from '../components/Product';

export default (props) => {
	const product = props.data.stripeProduct;
	const skus = props.data.allStripeSku.nodes;
	console.log(props)
	return (
		<Layout>
			<Product skus={skus} product={product} />
		</Layout>
	);
}

export const pageQuery = graphql`
	query($id: String){
		stripeProduct(id: { eq: $id}){
			id
			name
			slug
		}
		allStripeSku(filter:{product: {id: {eq: $id}}}) {
			nodes {
				image
				attributes {
					name
				}
				currency
				price
				created
			}
		}
	}
`;
