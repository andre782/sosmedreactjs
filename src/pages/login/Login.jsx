import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello Gaes.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore velit. Tenetur molestias vero praesentium quam consectetur tempore culpa pariatur! 
                    Iusto cum ea possimus temporibus aspernatur explicabo blanditiis, similique corrupti.</p>
                    <span>belum punya akun?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                   
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="password"/>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
