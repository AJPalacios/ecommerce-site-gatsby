import React from 'react';

export default ({product, skus}) => {
	const sku = skus[0];
	return (
		<article className="card">
			<header className="bg-blue-800 p-6 text-center">
				<div className="flex text-left">
					<div className="flex-1">
						{
							(sku &&  sku.image) &&
							<img src={sku.image} alt=""/>
						}
					</div>
					<div className="flex-1">
							<p>{sku.price}{sku.currency}</p>
					</div>
				</div>
			</header>
			<div className="text-center p-6">
				<h1 className="text-3xl uppercase mb-4">{product.name}</h1>
				<button>Comprar</button>
			</div>
		</article>
	);
}
