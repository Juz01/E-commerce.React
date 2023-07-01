import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderImgs from "../components/ProductId/SliderImgs"
import './styles/pageStyles.css'

const ProductIdPage = () => {

    const { id } = useParams()

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [ product, getProductById ] = useFetch(baseUrl)

    useEffect(() => {
        getProductById(`/products/${id}`)
    }, [id])


  return (
    <div className="father">
      <div className="product-flex">
        <SliderImgs 
            product={product}
        />
        <ProductInfo 
              product={product}
        />
      </div>
      <SimilarProducts 
        product={product}
      />
    </div>
  )
}

export default ProductIdPage