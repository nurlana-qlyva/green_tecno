import { useDispatch } from "react-redux"
import { editSelectedProduct } from "../../../features/cartProductSlicer"
import { useCallback, useRef, useSelector } from "react"

export default function EditModal({changeShowedModal}) {
    const inpVal = useRef()
    const dispatch = useDispatch()

    const setChangedValue = useCallback(() => {
        dispatch(editSelectedProduct(inpVal.current.value))
    }, [])

    return (
        <div className="edit-name">
            <div className='flex justify-end'>
                <div className='close-button' onClick={() => changeShowedModal()}>X</div>
            </div>
            <input type="text" ref={inpVal}/>
            <button onClick={setChangedValue}>add</button>
        </div>
    )
}
