import Hero from '../Component/Hero/Hero'
import NewCollections from '../Component/NewCollections/NewCollections'
import NewsLetter from '../Component/Newsletter/NewsLetter'
import Offers from '../Component/Offers/Offers'
import Popular from '../Component/Popular/Popular'

const Shops = () => {
  return (
    <div>
      <Hero />
      < Popular />
      <Offers />
      <NewCollections />
      <NewsLetter/>
    </div>
  )
}

export default Shops
