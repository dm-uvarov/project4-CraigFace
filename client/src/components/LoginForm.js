import React from 'react'
import {TextInput} from 'react-native-paper'

function LoginForm(){




    return (
        <div> 
            <div> 
                <h1>Login:</h1>    
            </div>
            <form>
                <div> 
                    <label> 
                        <div>Username: </div>
                        <input type="text" placeholder="Username"/>
                    </label>
                </div>
                <div> 
                    <label> 
                        <div>Password: </div>
                        <TextInput right={<TextInput.Icon name={paswordVisible ? "eye":"eye-off"}  />}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <div> or signup?</div>
         </div>


    )
}



export default LoginForm