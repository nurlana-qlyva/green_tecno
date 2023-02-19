import data from './../../../data/products.json'
import { useDispatch } from 'react-redux'
import { setSelectedSortingOption } from './../../../features/filterProductsSlice'

const SortingProducts = ({count}) =>  {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between sorting-for">
            <div>
                {count} məhsul tapıldı
            </div>
            <div className='sorting-choice'>
                <form action="">
                    <select name="price-start" id="" onChange={((e) => dispatch(setSelectedSortingOption(e.target.value)))}>
                        {data.options.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>
                </form>
            </div>
        </div>
    )
}

export default SortingProducts
