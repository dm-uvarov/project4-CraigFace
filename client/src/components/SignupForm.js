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
        }).then(r=>r.json()).then(console.log)


    }


return(
    <div className='signup-form'> 
        
            <h2>Signup</h2>    
        
    
        <form onSubmit={handleSubmit}>
                        
            <div class="form-outline mb-4">
                <input onChange={(e) => setUsername(e.target.value)} type="text" id="form2Example1" class="form-control" placeholder="Username" />
                <label class="form-label" for="form2Example1">Username</label>
            </div>
        
                                
            <div class="form-outline mb-4">
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="form2Example2" class="form-control" placeholder="Password" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>

            <div class="form-outline mb-4">
                <input onChange={e => setPasswordConfirm(e.target.value)} type="password" id="form2Example2" class="form-control" placeholder="Confirm Password" />
                <label class="form-label" for="form2Example2">Confirm Password</label>
            </div>
        
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
        </form>
    
 </div>
)

}

export default SignupForm