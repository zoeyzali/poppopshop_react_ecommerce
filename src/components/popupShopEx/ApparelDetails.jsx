import React, { useState, useEffect, useContext } from 'react'
import productsData from './assetsEtc/products.json'
import { CartContext } from '../../context/CartContext'
import { ConvertPrice } from '../../utils/convertPrice'

export const ApparelDetails = ( { match } ) => {
    const [product, setProduct] = useState( {} )
    const [sizeOption, setSizeOption] = useState( "" )
    const { params: { handle } } = match

    const { addToCart } = useContext( CartContext )

    useEffect( () => {
        mappedProduct()
        // eslint-disable-next-line
    }, [handle] )

    const mappedProduct = () => {
        const mapped = productsData.products.map( singleProduct => {
            if ( singleProduct.handle === handle ) {
                // console.log( handle, "handle" )
                setProduct( singleProduct )
            }
            return singleProduct
        } )
        return mapped
    }

    const handleFilterSize = ( e ) => {
        setSizeOption( e.target.value )
    }

    const filteredSizes = product.sizes && product.sizes.filter( size => {
        // console.log( size, "sizeFirstFILTER" )
        let sizeCaption = " **Universal/One Size"
        if ( size.size === "U" ) {
            size.size += sizeCaption
            return sizeCaption
        }
        return size
    } )
    // console.log( filteredSizes, "filteredSizes" )
    // console.log( product, "state-product" )

    return (
        <div className="apparels__item__wrapper">
            <div className="apparels__item__details">
                {product && product.handle &&
                    <div key={product.id} className="details__content">
                        <figure>
                            <img src={product.image} alt={product.name} />
                        </figure>
                        <h1>{product.name}</h1>
                        <hr></hr>
                        <div className="details__text">
                            <p>{product.desc}</p>
                            <span>{product.fashion_style}</span>
                            <span><ConvertPrice actual_price={product.actual_price} /></span>
                        </div>
                        <div className="details__filters">

                        </div>
                        <div className="btn__row">
                            <label>Available Sizes {" "}
                            </label>
                            <select value={sizeOption} onChange={handleFilterSize}>
                                {filteredSizes && filteredSizes.map( size => {
                                    return (
                                        <option key={size.sku} value={size.size}>
                                            {size.size}
                                        </option>
                                    )
                                } )}
                            </select>
                            <button className="btn details__btn" type="submit" onClick={() => addToCart( product )}>ADD TO CART</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
