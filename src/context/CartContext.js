import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
const localState = JSON.parse( localStorage.getItem( 'cart' ) )

export const CartProvider = ( props ) => {
  const [cart, setCart] = useState( localState || [] )

  const addToCart = ( item ) => {
    let newCart = [...cart]
    let index = newCart.findIndex( product => product.id === item.id )
    if ( index !== -1 ) {
      const updatedItem = { ...newCart[index] }
      newCart[index] = updatedItem
      alert( `Item ${JSON.stringify( updatedItem.productName ?
        updatedItem.productName : updatedItem.name )} already in cart` )
    } else {
      setCart( [...cart, item] )
      alert( `${JSON.stringify( item.productName ? item.productName : item.name )} added to cart` )
    }
    // console.log( [...cart], "cart" )
  }

  const removeItem = ( id ) => {
    const filtered = cart.filter( item => item.id !== id )
    setCart( [...filtered] )
  }

  useEffect( () => {
    localStorage.setItem( 'cart', JSON.stringify( cart ) )
  }, [cart] )

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeItem }}>
      {props.children}
    </CartContext.Provider>
  )
}
