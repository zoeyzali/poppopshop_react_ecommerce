import React, { Fragment } from 'react'

export const ApparelCategories = ( props ) => {
  // const [active, setActive] = useState( false )
  const toggle = () => !props.active
  // console.log( props, "props in categories" )
  return (
    <Fragment>
      <div className="categories__pills" value={props.filterOption}
        onClick={toggle}>
        {props.uniqueGender.map( item => (
          <button
            key={item.id}
            className={`${props.filterOption === item.gender && props.active ? "active category__pill" : "category__pill"}`}
            value={item.gender}
            onClick={props.handleFilterChange}>
            {item.gender}
          </button>
        ) )}
      </div>
      <label className="categories__dropdown">
        <span className="category__label">Select By Type</span>
        <select
          className="category__select"
          value={props.filterOption}
          onChange={props.handleFilterChange}>
          {props.uniqueType.map( item => {
            return (
              <option key={item.id} className="dropdown__content"
                value={item.type}>
                {item.type}
              </option>
            )
          } )}
        </select>
      </label>
      <div className="categories__pills"
        onClick={toggle}>
        <button className={`${props.filter && props.active.active ? "active category__pill" : "category__pill"}`}
          onClick={( category ) => props.sortByPrice( category )
          }>
          Show Me Cheapest
        </button>
      </div>
    </Fragment>
  )
}


