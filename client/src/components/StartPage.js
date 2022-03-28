import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LogoutButton from './LogoutButton'

function StartPage ({setUser}){

    return(
        <div>
            <LoginForm setUser={setUser}/>
            <SignupForm/>
            <LogoutButton setUser={setUser}/>
        </div>
    )
}













export default StartPage