import data from './../../../data/products.json'
import { useState, useCallback, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editSelectedProduct } from './../../../features/cartProductSlicer'

const EditProductDataModal = ({ changeShowedModal, show, id, selectedColor, selectedMemo}) => {
    const [color, setColor] = useState(selectedColor)
    const [memo, setMemo] = useState(selectedMemo)
    const selectedProductData = useSelector(state => state)
    console.log(selectedProductData)

    const getProductColor = useCallback((e) => {
        setColor(e.target.value)
    }, [color])

    const getProductStorage = useCallback((e) => {
        setMemo(e.target.value)
    }, [memo])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.id === 'close-button' ) {
                changeShowedModal && changeShowedModal();
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [changeShowedModal])

    const dispatch = useDispatch()

    const updateProductData = () => {
        dispatch(editSelectedProduct({color, memo, id}))
    }

    if (!show) {
        return null
    } else {
        return (
            <div className="edit-modal" id={id}>
                <div className='flex justify-end'>
                    <div className='close-button' id='close-button'>X</div>
                </div>
                <select name="color" onChange={getProductColor}>
                    {data?.colors?.map(color => {
                        return (
                            <option key={color.id} value={color.color_name}>{color.color_name}</option>
                        )
                    })}
                </select>
                <select name="color" value={memo} onChange={getProductStorage}>
                    {data?.storages?.map(storage => {
                        return (
                            <option key={storage.id} value={storage.storage}>{storage.storage}</option>
                        )
                    })}
                </select>
                <button onClick={updateProductData}>add</button>
            </div>
        )
    }


}

export default EditProductDataModal
