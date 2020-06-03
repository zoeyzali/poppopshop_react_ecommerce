import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ConvertPrice } from '../utils/convertPrice'


export const CartItem = ( { cartItem } ) => {
    const { removeItem } = useContext( CartContext )
    console.log( cartItem.actual_price, "propsDotPrice" )
    return (
        <div key={cartItem.id} className="cart__item">
            <figure>
                {cartItem.type && cartItem.image ?
                    <img src={cartItem.image} alt={cartItem.name} />
                    :
                    <img src={`/images/${cartItem.image}`} alt={cartItem.productName} />
                }
            </figure>

            <div className="cart__content">
                <p>{cartItem.productName ? cartItem.productName : cartItem.name}</p>
                <p>{cartItem && cartItem.price ?
                    Object.values( cartItem.price ).map( ( price, i ) => {
                        return (
                            <span key={i}>
                                {price.value} kr
                            </span>
                        )
                    } )
                    // : `$${cartItem.actual_price}`
                    : <span><ConvertPrice actual_price={cartItem.actual_price} /></span>
                }
                </p>
            </div>
            <button className="delete__btn" onClick={() => removeItem( cartItem.id )}>Remove</button>
        </div>
    )
}
