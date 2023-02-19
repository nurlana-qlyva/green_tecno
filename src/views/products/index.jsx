import CategorySidebar from './../../components/pages/products-category/CategorySidebar'
import Products from './../../components/pages/products-category/Products'

const ProductsCategory = () => {
  return (
      <section className='gt-products-filtering'>
          <div className="container mx-auto px-4">
              <div className="flex">
                <CategorySidebar />
                <Products />
              </div>
          </div>
      </section>
  )
}

export default ProductsCategory
