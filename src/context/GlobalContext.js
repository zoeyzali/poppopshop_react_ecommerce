import React, { createContext, useReducer, useEffect } from 'react'

const reducer = ( user, newUser ) => {
  if ( newUser === null ) {
    localStorage.removeItem( 'userInfo' )
    return initialState
  }
  return { ...user, ...newUser }
}
const initialState = {
  name: "Jane Doe",
  age: 32,
  email: "janedoe@idk.com"
}
const localState = JSON.parse( localStorage.getItem( 'userInfo' ) )

export const GlobalContext = createContext()
export const GlobalProvider = ( props ) => {
  const [user, setUser] = useReducer( reducer, localState || initialState )

  useEffect( () => {
    localStorage.setItem( 'userInfo', JSON.stringify( user ) )
  }, [user] )

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  )
}