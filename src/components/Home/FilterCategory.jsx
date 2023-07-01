import { useEffect } from "react"
import { useDispatch } from "react-redux"
import useFetch from "../../hooks/useFetch"
import { getAllProductThunk } from "../../store/slices/products.slice"
import './styles/FilterCategory.css'


const FilterCategory = () => {
    
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [ categories, getAllCategories ] = useFetch(baseUrl)

    useEffect(() => {
        getAllCategories("/categories")
    }, [])

    const dispatch = useDispatch()

    const handleFilterCartegory = (id) => {
        if(id) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
            dispatch(getAllProductThunk(url))
        } else {
            dispatch(getAllProductThunk())
        }
    };

  return (
    <article>
        <h3 className="filter__price-title">
            Categories
            <i class='bx bx-chevron-down'></i>
        </h3>
        <ul className="category_content">
            <li style={{cursor:"pointer" }} 
            onClick={() => handleFilterCartegory()}>
                All Categories
            </li>
            {
                categories?.map((category) => (
                    <li style={{cursor:"pointer" }} 
                    onClick={() => handleFilterCartegory(category.id)} 
                    key={category.id}
                    >
                        {category.name}
                    </li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory