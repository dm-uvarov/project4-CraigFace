import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LogoutButton from './LogoutButton'

function StartPage ({setUser}){

    return(
        <div>
            <LoginForm setUser={setUser}/>
            <h2 id='member'>Not a member?</h2>
            <SignupForm/>
            
        </div>
    )
}













export default StartPage