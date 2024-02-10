import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function ShopCategories() {
  const {All_product} = useContext(ShopContext)
  return (
    <div>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategories
