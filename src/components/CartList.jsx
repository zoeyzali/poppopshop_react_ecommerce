import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const CartList = () => {
    const { cart } = useContext( CartContext )

    const getTotal = () => {
        return cart.filter( cartItem => cartItem ).reduce( ( acc, value ) => {
            let convertedValue = Number( parseFloat( value.actual_price ) * 10 )
            let mappedPrice = Number( value.price && value.price.sales.value )
            let newVal = ( { ...value, convertedValue, mappedPrice } )
            console.log( "newVALUE", newVal )

            if ( newVal.convertedValue && newVal.mappedPrice === isNaN ) {
                return newVal = newVal.convertedValue
            }

            if ( newVal.mappedPrice && newVal.convertedValue === isNaN ) {
                newVal.mappedPrice = newVal
                return newVal
            }

            // newVal = value
            // console.log( newVal.mapped, "newVal" )
            /**Number( newVal.pris.convertedValue !== undefined ) ? Number( newVal.pris.convertedValue ) : Number( newVal.pris.mappedPrice ) */

            return acc += newVal.mappedPrice || newVal.convertedValue
        }, 0 )
    }


    return (
        <div className="cart__wrapper">
            <div className="cart">
                {cart && cart.map( cartItem => {
                    return (
                        <CartItem key={cartItem.id} cartItem={cartItem} actual_price={cartItem.actual_price} />
                    )
                } )}
                <div className="total__cart">
                    <p>
                        CART TOTAL {" "}
                        <span> {getTotal().toFixed( 2 )} SEK</span>
                    </p>
                    <br />
                    <br />
                    <p> ITEMS {" "} <span>
                        {cart.length}
                    </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
