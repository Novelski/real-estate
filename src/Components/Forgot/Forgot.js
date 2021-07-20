import './Forgot.css'

import React from 'react'

const Forgot = () => {
    return (
        <section className="">
    <div className="form-container">
        <h1>Forgot Password</h1>
        <form action="#">
            <div className="control">
                <label>Email id</label>
                <input type="text" name="name" id="name"/>
            </div>
           
            <div className="control">
                <input type="submit" value="Send Reset Password"/>
            </div>
        </form>
        <div className="link">
<a routerLink="/login"> Sign In</a>
        </div>
    </div>
</section>
    )
}

export default Forgot

