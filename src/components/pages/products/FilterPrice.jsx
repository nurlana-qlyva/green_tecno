import { useDispatch } from 'react-redux'
import { setSelectedSortingOption } from '../../../features/filter'
import data from './../../../data/data.json'

export default function FilterPrice({count}) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between filter-price">
            <div>
                {count} məhsul tapıldı
            </div>
            <div className='filter-select'>
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
