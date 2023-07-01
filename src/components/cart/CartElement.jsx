import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"
import { useState } from "react"



const CartElement = ({ prod }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(state => state - 1)
        }
    }

    const handleAdd = () => setQuantity(state => state + 1)

const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
}

  return (
    <article className="cart__element">
        <header className="cart__element-header">
            <img className="cart__element-header-img" src={prod.product.images[0].url} alt="" />
        </header>

        <section className="cart__element-section">
            <h3 className="cart__element-title">{prod.product.title}</h3>
            <div className="cart__element-btns">
                <button className="cart__elemente-minus" onClick={handleMinus}><i className='bx bx-minus'></i></button>
                <div className="cart__elemente-quantity">{quantity}</div>
                <button className="cart__elemente-plus" onClick={handleAdd}><i class='bx bx-plus'></i></button>
            </div>
            <button 
                className="cart__element-btn"
                onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </button>
        </section>

        <footer className="cart__element-footer">
            <span className="cart__element-subtotal"> Subtotal </span><span className="cart__element-total">{prod.quantity * prod.product.price}</span>
        </footer>
    </article>
  )
}

export default CartElement