import { Link } from "react-router-dom"
import './styles/Header.css'
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="header">
            <h1 className="title">
                <Link style={{color: 'var(--color-red)'}} to={'/'}>E-commerce</Link>
            </h1>

            <nav className="navbar">
                <i onClick={toggleMenu} className='bx bx-menu-alt-right'></i>
                <ul className={`lista ${isOpen ? "is-open" : ""}`}>
                    <li className="register_li">
                        <Link  style={{color: 'black'}} className='register_link' to={'/register'}>
                            <i className='bx bx-user'></i>
                        </Link>
                    </li>
                    <li className="login_li">
                        <Link style={{color: 'black'}} className='login_link' to={'/login'}>
                            <i className='bx bx-box'></i>
                        </Link>
                    </li>
                    <li className="cart_li">
                        <Link style={{color: 'black'}} className='cart_link' to={'/cart'}>
                            <i className='bx bx-cart'></i>
                        </Link>
                    </li>
                    <li className="list_li">
                        <Link style={{color: 'black'}} className='list_link' to={'/purchases'}>
                            <i className='bx bx-align-justify'></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header