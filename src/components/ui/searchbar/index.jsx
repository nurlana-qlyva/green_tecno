import { useState, useRef, useCallback } from 'react'
import { SearchIcon } from '../../../icons'
import Popup from './Popup'

const SearchBar = () => {
    const [value, setValue] = useState('')
    const [showed, setShowed] = useState(false)
    const searchValue = useRef()

    const searchItem = useCallback(() => {
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

            {showed ? <Popup value={value}  show={showed} onClickOutside={() => {setShowed(false)}}/> : null}
        </>
    )
}

export default SearchBar
