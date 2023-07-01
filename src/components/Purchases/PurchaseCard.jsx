
const PurchaseCard = ({ prod }) => {

  const date = new Date(prod.updatedAt)
  const day = date.toLocaleDateString()
  console.log(day);

    console.log(prod);

  return (
    <article className="purchases__cart">
        <img className="purchases__img" src={prod.product.images[0].url} alt="" />
        <h3 className="purchases__title-cart">{prod.product.title}</h3>
        
        <div className="purchases__body">
          <h4 className="purchase__cart-time">{day}</h4>
            <span className="purchases__body-quantity">{prod.quantity}</span><span className="purchases__body-amount">$ {prod.product.price}</span>
        </div>
    </article>
  )
}

export default PurchaseCard