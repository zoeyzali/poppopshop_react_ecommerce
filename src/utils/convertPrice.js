import React from 'react'

export const ConvertPrice = ( props ) => {
  // eslint-disable-next-line
  let formatter = new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
  } )

  let dollarsConverted = new Intl.NumberFormat( 'se-SE', {
    style: 'currency',
    currency: 'SEK'
  } )
  // {formatter.format( 2500 ) /* $2,500.00 */}

  return (
    <React.Fragment>
      {dollarsConverted.format( Number.parseFloat( props.actual_price ) * 10 )}
    </React.Fragment>
  )
}
