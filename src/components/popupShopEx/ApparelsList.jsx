import React, { useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import sideImg from './assetsEtc/aside_img_ex.jpg'
import { ApparelCategories } from './ApparelCategories';
import { FilterRender } from './FilterRender';


export const ApparelsList = () => {
    const [products, setProducts] = useState( [] )
    const [filter, setFilter] = useState()
    const [filterOption, setFilterOption] = useState( "" )
    const [active, setActive] = useState( false )


    useEffect( () => {
        const products = require( './assetsEtc/products.json' )
        setProducts( products.products )
    }, [] )

    // <= Number.parseFloat( "299,90" ).toFixed( 2 )
    const sortByPrice = () => {
        const productsArr = products.filter( product => product.actual_price )
            .sort( ( p1, p2 ) => Number.parseFloat( p1.actual_price ) - Number.parseFloat( p2.actual_price ) )
            .map( product => {
                console.log( product.actual_price, "product" )
                setFilter( product.actual_price )
                return product
            } )
        setProducts( [...productsArr] )
        // console.log( "productsArr", productsArr )
        return productsArr
    }

    // console.log( filter, "filter" )
    const getUnique = ( arr, comp ) => {
        const unique = arr
            .map( e => e[comp] )
            .map( ( e, i, final ) => final.indexOf( e ) === i && i )
            .filter( e => arr[e] )
            .map( e => arr[e] )
        // console.log( "comparison category", comp )
        return unique
    }

    const handleFilterChange = ( e ) => {
        setFilterOption( e.target.value )
        setActive( !active )
    }

    const uniqueGender = getUnique( products, "gender" )
    const uniqueType = getUnique( products, "type" )


    return (
        <div className="apparels__wrapper">
            <div className="apparels__display">
                <h1>YOUR <span>NEIGHBOURHOOD</span> <span>POPUP</span>
                    SHOP
                </h1>
                <ApparelCategories
                    handleFilterChange={handleFilterChange}
                    uniqueType={uniqueType}
                    uniqueGender={uniqueGender}
                    filterOption={filterOption}
                    sortByPrice={sortByPrice}
                    filter={filter}
                    active={active}
                    getUnique={getUnique}
                />
            </div>
            <div className="apparels__inner">
                <div className="apparels__aside">
                    <figure>
                        <img src={sideImg} alt={sideImg} />
                    </figure>
                    <h2>TRENDS ASIDE</h2>
                </div>

                <div className="apparels__list">
                    {filterOption ?
                        <FilterRender
                            products={products}
                            filterOption={filterOption}
                            filter={filter}
                        /> :
                        products && products.map( ( product => {
                            // let id = uuidv4()
                            // if ( product.id === undefined ) {
                            //     product.id = id
                            // }
                            return (
                                <Link key={product.id} to={`/fashion/${product.handle}`} className="apparels__list__item">
                                    <img src={product.image} alt={product.name} />
                                    <span className="list__item__name">{product.name} <br />
                                        {filter && <span>{`from ${product.actual_price ? product.actual_price : ""}`}</span>
                                        }
                                    </span>
                                    {product.on_sale ? <span className="sales__label">{product.on_sale && product.discount_percentage}
                                    </span>
                                        : ""
                                    }
                                </Link>
                            )
                        } ) )
                    }
                </div>
            </div>
        </div>
    )
}
