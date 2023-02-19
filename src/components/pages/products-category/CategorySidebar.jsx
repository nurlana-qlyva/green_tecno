import data from './../../../data/products.json'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCategory, setSelectedBrand } from './../../../features/filterProductsSlice'
import SliderRange from './../../ui/SliderRange'

const CategorySidebar = () => {
    const selectedCategory = useSelector(state => state.product.selectedCategory)
    const dispatch = useDispatch()

    return (
        <aside className='sidebar'>
            <div className='categories-filtering'>
                <h2>Kateqoriyalar</h2>
                <ul>
                    {data.categories.map(category => {
                        return (
                            <li
                                key={category.id}
                                className={category.id === selectedCategory ? 'active' : null}
                                onClick={() => dispatch(setSelectedCategory(category.id))}
                            >
                                {category.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='price-filtering'>
                <h2>Qiymət aralığı</h2>
                <SliderRange />
            </div>
            <div className='brands-filtering'>
                <h2>Brendlər</h2>
                <form action="">
                    {data.brands.map(brand => {
                        return <div key={brand.id}>
                            <input type="radio" name="brand" id={brand.id} value={brand.name} onClick={() => dispatch(setSelectedBrand(brand.id))} />
                            <label htmlFor={brand.id}>{brand.name}</label>
                        </div>
                    })}
                </form>
            </div>
        </aside>
    )
}

export default CategorySidebar
