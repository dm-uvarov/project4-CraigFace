import React from 'react'


function SignupForm(){


return(
    <div> 
    <div> 
        <h2>Signup:</h2>    
    </div>
    <form>
        <div> 
            <label> 
                <div>Enter your username: </div>
                <input type="text" placeholder="Username"/>
            </label>
        </div>
        <div> 
            <label> 
                <div>Enter your password: </div>
                <input type="password"  />
            </label>
        </div>
        <div> 
            <label> 
                <div>Confirm your password: </div>
                <input type="password"  />
            </label>
        </div>
        <div>
            <button type="submit">signup</button>
        </div>
    </form>
    
 </div>
)

}

export default SignupForm