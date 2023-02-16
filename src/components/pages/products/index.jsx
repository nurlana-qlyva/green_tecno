import FilterCategory from './FilterCategory'
import Products from './Products'

export default function ProductsCategories() {
  return (
    <section className='products-section'>
        <div className="container mx-auto px-4">
            <div className="flex">
                <FilterCategory />
                <Products />
            </div>
        </div>
    </section>
  )
}
