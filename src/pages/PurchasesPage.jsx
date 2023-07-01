import { useEffect } from "react"
import usePurchase from "../hooks/usePurchase"
import PurchaseCard from "../components/Purchases/PurchaseCard"
import Purchase from "./styles/Purchases.css"

const PurchasesPage = () => {

    const { purchases, getAllPurchase } = usePurchase()

    useEffect(() => {
        getAllPurchase()
    }, [])

  return (
    <div className="purchases">
        <h2 className="purchases__title">My Purchases</h2>
        <div className="purchases__container">
            {
                purchases?.map(prod => (
                    <PurchaseCard 
                        key={prod.id}
                        prod={prod}
                    />    
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage