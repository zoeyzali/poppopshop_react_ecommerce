import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const EditDetails = () => {
  const { user, setUser } = useContext( GlobalContext )
  const handleChange = e => {
    setUser( {
      [e.target.name]: e.target.value
    } )
    // console.log( e.target, "this event" )
  }
  return (
    <div className="home__page">
      <p>Name
        <input type="text" value={user.name} name="name" onChange={handleChange}
        />
      </p>
      <p>Email
        <input type="email" value={user.email} name="email" onChange={handleChange} />
      </p>
      <p>Age
        <input type="number" value={user.age} name="age" onChange={handleChange} />
      </p>
    </div>
  )
}
