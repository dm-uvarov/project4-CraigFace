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
    <div> 
    <div> 
        <h2>Signup:</h2>    
    </div>
    <form onSubmit={handleSubmit}>
        <div> 
            <label> 
                <div>Enter your username: </div>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
            </label>
        </div>
        <div> 
            <label> 
                <div>Enter your password: </div>
                <input  onChange={e => setPassword(e.target.value)} type="password"  />
            </label>
        </div>
        <div> 
            <label> 
                <div>Confirm your password: </div>
                <input onChange={e => setPasswordConfirm(e.target.value)} type="password"  />
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