import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'

const FilterPrice = ({ setPriceMinMax, priceMinMax }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const min = data.from.trim() === "" ? 0 : +data.from
    const max = data.to.trim() === "" ? Infinity : +data.to

    setPriceMinMax({ min, max })
  }

  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity })
    reset({
      from: "",
      to: ""
    })
  }

  return (
    <article className="filter__price">
        <h3 className="filter__price-title">Price
          <i class='bx bx-chevron-down'></i>
        </h3>
      <div className="price_content">
        <div className="input_price">
          <form onSubmit={handleSubmit(submit)} className="filter__price-form">
            <div className="filter__price-formElement">
              <label className="filter__price-label" htmlFor="from">From</label>
              <input {...register('from')} className="filter__price-inputF" type="number" id="from" />
            </div>
            <div className="filter__price-formElement">
              <label className="filter__price-label" htmlFor="to">To</label>
              <input {...register('to')} className="filter__price-inputT" type="number" id="to" />
            </div>
            <button className="filter__price-btn">Filter Price</button>
          </form>
        </div>

        {/* {
          priceMinMax.min !== 0 || priceMinMax !== Infinity
            ? <p>From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFilter}></b> </p>
            : ''
        } */}
      </div>
    </article>
  )
}

export default FilterPrice