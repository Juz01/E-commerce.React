import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import LogIn from './styles/login.css'
import { Link } from "react-router-dom"

const LoginPage = () => {

    const {register, reset, handleSubmit} = useForm()

    const {loginUser} = useAuth()


    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        loginUser(url,data)
        reset(
            {
              email: '',
              password:''
            }
          )
    }


  return (
    <div className="log">
      <div className="log__container">
        <div className="log__container-content">
          <h2 className="log__title">Welcome !! Enter your email and password to continue</h2>
          <div className="log__test">
            <h3 className="log__test-title">Test Data</h3>
            <div className="log__test-body">
              <i className='bx bxs-envelope'></i> <p className="log__test-p">will.smith@gmail.com</p>
              <i className='bx bxs-lock-alt'></i> <p className="log__test-p">smith123</p>
            </div>
          </div>
          <form className="log__form" onSubmit={handleSubmit(submit)}>
            <div className="log__form-container">
              <label className="log__form-label" htmlFor="email">Email</label> <hr />
              <input className="log__form-input" {...register('email')}type="text" id="email" />
            </div>

            <div className="log__form-container">
              <label className="log__form-label" htmlFor="password">Password</label> <hr />
              <input className="log__form-input" {...register('password')}type="password" id="password" />
            </div>

            <button className="log__form-btn">Login</button>
          </form>
          <div className="log__sign">
            <p>Don't have an account ?</p> <Link to={'/register'}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage