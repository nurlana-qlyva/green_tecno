import { useState, useRef, useCallback } from 'react'
import { SearchIcon } from './../../../icons'
import ProductsModal from './ProductsModal'

export default function SearchForm() {
    const [value, setValue] = useState('')
    const [showed, setShowed] = useState(false)
    const searchValue = useRef()

    const searchItem = useCallback(() => {
        console.log('yes')
        setValue(searchValue.current.value)
        setShowed(true)
    }, [])
    
    return (
        <>
            <form action="" >
                <input type="text" placeholder='Məhsul axtar' ref={searchValue} onChange={searchItem}/>
                <button type='submit'>
                    <SearchIcon />
                </button>
            </form>

            {showed ? <ProductsModal value={value}  show={showed} onClickOutside={() => {setShowed(false)}}/> : null}
        </>
    )
}
