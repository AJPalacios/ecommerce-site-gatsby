import React, { Fragment } from 'react';
import ProductCard from '../components/ProductCard';

export default ({ products }) => {
	return(
		<Fragment>
			{products.map(product => <ProductCard key={product.id} product={product}/>)}
		</Fragment>
	)
}
