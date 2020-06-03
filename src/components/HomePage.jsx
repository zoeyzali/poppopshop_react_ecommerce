import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export const HomePage = () => {
    const { user, setUser } = useContext( GlobalContext )
    return (
        <div className="home__page">
            <div className="display__wrapper">
                <h1 className="fashion__display">
                    <span>  YOUR </span>
                    POPUP
                </h1>
                <h1 className="fashion__display_2">NEIGHBOURHOOD</h1>
            </div>
            <h3>USER</h3>
            <UserInfo user={user} />
            <button onClick={() => setUser( null )}>RESET</button>
        </div>
    )
}


const UserInfo = ( { user } ) => (
    <div className="user__info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
    </div>
)

