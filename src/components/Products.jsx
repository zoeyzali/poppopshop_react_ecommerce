import React, { useEffect, useState } from 'react'
import productsData from '../data/productsData.json'
import { Product } from './Product'

export const ProductsList = () => {
  const [products, setProducts] = useState( [] )
  useEffect( () => {
    setProducts( productsData )
  }, [] )

  // to={`products/${product.id}`}
  return (
    <div className="main__wrapper">
      <div className="products__wrapper">
        <div className="apparels__display">
          <h1>URBAN <span>JUNGLE</span> <span>POPUP SHOP</span>
          </h1>
        </div>
        <div className="products__list">
          {products && products.length > 0 && products.map( product => <Product
            product={product} key={product.id}
          />
          )}
        </div>
      </div>
    </div>
  )
}
