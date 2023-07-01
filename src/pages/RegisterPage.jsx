import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import Register from './styles/register.css'
import { Link } from "react-router-dom"


const RegisterPage = () => {

    const  {register, handleSubmit, reset } = useForm()
    
    const {createUser} = useAuth()


  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data)
    reset ({
      firstName: '', 
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form" onSubmit={handleSubmit(submit)}>
          <h1 className="register__title">REGISTER</h1>
          <div>
            <label className="register__label" htmlFor="firstName">First name</label> <br />
            <input className="register__input" { ...register('firstName')} type="text" id="firstName" />
          </div>
          <div>
            <label className="register__label" htmlFor="lastName">Last name</label> <br />
            <input className="register__input" { ...register('lastName')} type="text" id="lastName" />
          </div>
          <div>
            <label className="register__label" htmlFor="email">Email</label> <br />
            <input className="register__input" { ...register('email')} type="email" id="email" />
          </div>
          <div>
            <label className="register__label" htmlFor="password">Password</label> <br />
            <input className="register__input" { ...register('password')} type="password" id="password" />
          </div>
          <div>
            <label className="register__label" htmlFor="phone">Phone</label> <br />
            <input className="register__input" { ...register('phone')} type="number" id="phone" />
          </div>
          <button className="register__btn">Submit</button>
          <p className="register__login">I have already an account lin <Link to={'/login'}>Log In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage