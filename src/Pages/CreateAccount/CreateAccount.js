import React from "react"
const Login = () => {
    return (
        <form action="" className="border rounded shadow p-3">
            <div className="form-group mb-3"><label for="">Username</label><input type="text" className="form-control" /></div>
            <div className="form-group mb-3"><label for="">Email</label><input type="text" className="form-control" /></div>
            <div className="form-group mb-3"><label for="">Password</label><input type="text" className="form-control" /></div>
            <button className="btn btn-primary">submit</button>
        </form>
    )
}

export default Login