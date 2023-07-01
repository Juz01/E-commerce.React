import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement";
import Cart from './styles/Cart.css'
import usePurchase from "../hooks/usePurchase";

const CartPage = () => {

    const cart = useSelector(states => states.cart)

    const totalPrice = cart.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)
    
    const { makePurchase } = usePurchase()

    const handlePurchase = () => {
      makePurchase()
    }

  return (
    <div className="cart">
        <h2 className="cart__title">Cart</h2>
        <div className="cart__body">
          {
            cart.map(prod => (
              <CartElement 
                key={prod.id} 
                prod={prod}
              />
            ))
          }
        </div>
        <footer className="cart__footer">
          <div className="cart__fotter-container">
            <span className="cart__total">Total:</span><span className="cart__price">$ {totalPrice}.00</span>
          </div>
          <button className="cart__btn" onClick={handlePurchase} >Buy It</button>
        </footer>
    </div>
  )
}

export default CartPage