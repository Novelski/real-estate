import './Login.css'

import React from 'react'

const Login = () => {
    return (
        <section>
        <div className='form-container'>
        <h1>Login</h1>
          <form>
            <div className='control'>
            <label>Username</label>
             <input type="text" name="name" id="name"/>
            </div>
            <div className="control">
                     <label>Password</label>
                     <input type="password" name="psw" id="psw"/>
                 </div>
                 <span><input type="checkbox"/> Remember me..</span>
                 <div className="control">
                     <input  type="submit" value="Login"/>
                 </div>
          </form>
          <div className="link">
     <a href=""> Forgot Password ?</a>
             </div>
        </div>
      </section>
    )
}

export default Login
