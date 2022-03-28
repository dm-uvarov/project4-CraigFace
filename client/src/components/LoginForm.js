import React,{useState} from 'react'


function LoginForm({setUser}){


    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")



    const onSubmit = (e) => {
        e.preventDefault()
        const userLogin = {
            username: username,
            password: password
        }

        fetch('/login',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userLogin)
        })
        // Problem with error handling
        .then(r=>{
            if(r.ok){
                r.json().then(setUser)
            }else{
                r.json().then(alert("Invalid Username or Password"))
            }
        })
        // .then(d => console.log(d))
    }

    return (
        <div> 
            <div> 
                <h1>Login:</h1>    
            </div>
            <form onSubmit={onSubmit}>
                <div> 
                    <label> 
                        <div>Username: </div>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
                    </label>
                </div>
                <div> 
                    <label> 
                        <div>Password: </div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password"  />
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