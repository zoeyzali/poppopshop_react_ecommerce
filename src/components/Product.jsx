import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Product = ( { product } ) => {
    const { addToCart } = useContext( CartContext )
    console.log( product )
    return (
        <div key={product.id}
            className="product__item">
            <figure>
                <img src={`/images/${product.image}`} alt={product.productName} />
            </figure>
            <p>{product.productName}</p>
            <p>{Object.values( product.price ).map( ( price, i ) => {
                // console.log( price, price.currency )
                return <span key={i}>
                    {price.value}{" "}{price.currency}
                    <br />
                </span>
            } )
            }
            </p>
            {`${product.description.slice( 0, 60 )} ...`}
            <span className={`product__item__instock ${product.inStock}`}>{product.inStock === true ? "In Stock" : "Currently Out"}</span>
            <button className="add__btn" onClick={() => addToCart( product )}>ADD TO CART</button>
        </div>
    )
}
