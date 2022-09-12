import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LogoutButton from './LogoutButton'

function StartPage ({setUser,setIsLoggedIn}){

    return(
        <div>
            <LoginForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
            <h4 className='h4' id='member'>Not a member?</h4>
            <SignupForm/>
            
        </div>
    )
}













export default StartPage