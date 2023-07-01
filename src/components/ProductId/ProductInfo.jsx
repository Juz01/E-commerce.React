import { useState } from "react"
import { postCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import './style/SliderImg.css'


const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(state => state - 1)
        }
    }

    const handleAdd = () => setQuantity(state => state + 1)

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(postCartThunk(product, quantity))
    }


return (
    <div className="produc__info">
        <h3 className="title__brand">{product?.brand}</h3>
        <h2 className="title__title">{product?.title}</h2>
        <p className="produc__description">{product?.description}</p>
        <footer className="product__info-footer">
    
                <ul className="ul__productinfo" >
                    <li className="price">
                        <span className="price__title"> Price</span>
                        <span className="price__content">$ {product?.price}</span>
                    </li>
                    <li className="quantity">
                        <span>Quantity</span>
                        <div className="buttons">
                            <button className="button__minus" onClick={handleMinus}><i className='bx bx-minus'></i></button>
                            <div className="cuantity">{quantity}</div>
                            <button className="button__plus" onClick={handleAdd}><i class='bx bx-plus'></i></button>
                        </div>
                    </li>
                </ul>
            <button onClick={handleAddToCart} className="add__card">Add to Cart <i class='bx bx-cart'></i></button>
        </footer>
    </div>
)
}

export default ProductInfo