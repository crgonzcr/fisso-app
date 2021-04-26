import React, { useEffect, useReducer } from 'react'
import { Authcontext } from './components/Auth/AuthContext'
import { authReducer } from './components/Auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const FissoApp = () => {
    
    const [ user, dispatch ] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user]);

    return (

        <Authcontext.Provider value={{ user, dispatch }}>
            <AppRouter/>
        </Authcontext.Provider>
    )
}
