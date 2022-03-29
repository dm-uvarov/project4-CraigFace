import React,{useState} from 'react'



function LoginForm({setUser}){


    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")


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

        <div className="login-form">
            <h1>Login</h1> 
            <form onSubmit={onSubmit}>
                        
                <div class="form-outline mb-4">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="form2Example1" class="form-control" placeholder="Username" />
                    <label class="form-label" for="form2Example1">Username</label>
                </div>

                        
                <div class="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="form2Example2" class="form-control" placeholder="Password" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>
            </form>

            
        

         </div>


    )
}



export default LoginForm