import React, { useState, useEffect } from 'react';
import Title from './ui/Title';
import Products from 'api/products';
import ProductItem from './ui/ProductItem';

function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-0.1 rounded-lg overflow-hidden">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
