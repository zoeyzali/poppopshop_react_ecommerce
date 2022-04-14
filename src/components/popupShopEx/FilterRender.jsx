import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const FilterRender = ( props ) => {
  const filterNew = props.products.filter( result => {
    return result.type === props.filterOption
  } )

  const filteredDropDown = props.products.filter( function ( result ) {
    if ( result.gender ) {
      return result.gender === props.filterOption
    } else {
      return result.type === props.filterOption
    }
  } )
  // console.log( filteredDropDown, "YO MAMA", props.filterOption )
  return (
    <Fragment>
      {filterNew && filterNew.map( product =>
        <Link
          key={product.id}
          to={`/fashion/${product.handle}`}
          className="apparels__list__item">
          <img src={product.image} alt={product.name}
          />
          <span className="list__item__name">{product.name}
            <br />
            {props.filter
              && <span> {`Lowest from $${product.actual_price ? product.actual_price : ""}`}
              </span>
            }
          </span>
          {product.on_sale
            ? <span className="sales__label">
              {product.on_sale && product.discount_percentage}
            </span>
            : ""
          }
        </Link>
      )}
      {filteredDropDown && filteredDropDown.map( product =>
        <Link
          key={product.id}
          to={`/fashion/${product.handle}`}
          className="apparels__list__item">
          <img src={product.image} alt={product.name}
          />
          <span className="list__item__name">
            {product.name}
            <br />
            {props.filter &&
              <span>
                {`Lowest from $${product.actual_price ? product.actual_price : ""}`}
              </span>}
          </span>
          {product.on_sale
            ? <span className="sales__label">
              {product.on_sale && product.discount_percentage}
            </span>
            : ""
          }
        </Link>
      )}
    </Fragment>
  )
}