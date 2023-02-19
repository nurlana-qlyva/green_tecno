import data from './../../../data/products.json'
import SortingProducts from './SortingProduct'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = () => {
    const { selectedCategory, selectedBrand, selectedSortingOption, selectedPrice } = useSelector(state => state.product)

    const getFilteredData = () => {
        if (selectedCategory === '' && selectedBrand !== '') {
            return data.products?.filter(product => product?.brand_id === selectedBrand)
        } else if (selectedCategory !== '' && selectedBrand === '') {
            return data.products?.filter(product => product?.category_id === selectedCategory)
        } else if (selectedCategory !== '' && selectedBrand !== '') {
            return data.products?.filter(product => product?.category_id === selectedCategory && product?.brand_id === selectedBrand)
        } else {
            return data.products
        }
    }

    const getFilteredByPriceData = () => {
        return getFilteredData().filter(item => item.price > selectedPrice[0] && item.price < selectedPrice[1])
    }

    const getSortedData = () => {
        if (Number(selectedSortingOption) === 1) {
            return getFilteredByPriceData().sort((a, b) => a.name.localeCompare(b.name))
        } else if (Number(selectedSortingOption) === 2) {
            return getFilteredByPriceData().sort((a, b) => a.price - b.price)
        } else {
            return getFilteredByPriceData().sort((a, b) => b.price - a.price)
        }
    }

    return (
        <div className='all-products'>
            <SortingProducts count={getSortedData().length} />
            <div className='grid grid-cols-3 product'>
                {getSortedData().map(product => {
                    return <Link key={product.id} to={`/products/${product.id}`}>
                        <div className="card" key={product.id}>
                            <div className="card-img">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p>
                                    {product.discount ? <span className='discount'>${product.discount}</span> : null}
                                    <span className='price'>${product.price}</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Products
