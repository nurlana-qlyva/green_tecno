import { useEffect } from 'react'
import data from './data.json'
import FilterPrice from './FilterPrice'
import { useSelector } from 'react-redux'

export default function Products() {

    const {selectedCategory,selectedBrand,selectedSortingOption,selectedPrice} = useSelector(state => state.product)

    const getFilteredData = () => {
        if (selectedCategory !== '' || selectedBrand !== '') {
            return data.products?.filter(product => product?.category_id === selectedCategory || product?.brand_id === selectedBrand)
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
            console.log('yes')
            return getFilteredByPriceData().sort((a, b) => a.price - b.price)
        } else {
            return getFilteredByPriceData().sort((a, b) => b.price - a.price)
        }
    }

    useEffect(() => {
        // console.log(selectedPrice)
        // console.log(getFilteredData())
    }, [selectedCategory, selectedBrand, selectedSortingOption, selectedPrice])
    
    return (
        <div className='right-side'>
            <FilterPrice count={getSortedData().length} />
            <div className='grid grid-cols-3 product'>
                {getSortedData().map(product => {
                    return <div className="card" key={product.id}>
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
                })}
            </div>
        </div>
    )
}
