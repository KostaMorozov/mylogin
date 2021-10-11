import React from 'react'

export default function Login() {
    return (
        <div className="container">
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
