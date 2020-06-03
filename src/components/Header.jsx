import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const Header = ( { EditButton, isEditing, setEditing } ) => {
    const { cart } = useContext( CartContext )

    return (
        <header>
            <div className="nav__wrapper">
                <div className="logo__wrapper">
                    <span className="logo">
                        context & stuff.</span>
                </div>
                <nav>
                    <div className="navlinks__list">
                        <Link to="/" className="navlinks__item" >
                            Home</Link>
                        <Link to="/fashion" className="navlinks__item">
                            Fashion</Link>
                        <Link to="/products" className="navlinks__item">
                            Products</Link>
                        <Link to="/cart" className="navlinks__item cart">
                            <span className="cart__icon"></span>
                            <span className="cart__tooltip">
                                {cart && cart.length}</span>
                        </Link>
                        <EditButton isEditing={isEditing} setEditing={setEditing} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
