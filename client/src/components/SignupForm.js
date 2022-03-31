import React,{useState} from 'react'


function SignupForm(){

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm,setPasswordConfirm] = useState("")

    const handleSubmit = (e) => {
        // e.preventDefault()
        if(password !== passwordConfirm){
            return alert("passwords do not match")
        }
        const newUser = {
            username: username,
            password: passwordConfirm
        }

        fetch("/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newUser)
        }).then(r=>r.json()).then(alert(`Welcome to CraigFace, ${newUser.username}`))


    }


return(
    <div className='signup-form'> 
        
            <h2>Signup</h2>    
        
    
        <form onSubmit={handleSubmit}>
                        
            <div className="form-outline mb-4">
                <input onChange={(e) => setUsername(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Username" />
                <label className="form-label" htmlFor="signup-username-input">Username</label>
            </div>
        
                                
            <div className="form-outline mb-4">
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="signup-password-input" className="form-control" placeholder="Password" />
                <label className="form-label" htmlFor="signup-password-input">Password</label>
            </div>

            <div className="form-outline mb-4">
                <input onChange={e => setPasswordConfirm(e.target.value)} type="password" id="signup-password-c-input" className="form-control" placeholder="Confirm Password" />
                <label className="form-label" htmlFor="signup-password-c-input">Confirm Password</label>
            </div>
        
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
        </form>
    
 </div>
)

}

export default SignupForm