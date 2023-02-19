import data from './../../../data/products.json'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { deleteSelectedProduct, incrementCount, decrementCount } from './../../../features/cartProductSlicer'
import EditProductDataModal from './../../ui/edit-modal'

const Cart = () => {
    const [isShow, setIsShow] = useState(false)
    const [activeId, setActiveId] = useState(null)

    const selectedProductData = useSelector(state => state)

    const dispatch = useDispatch()

    const onclickEdit = id => {
        setActiveId(id)
        setIsShow(true)
    }

    let resultPay = 0

    selectedProductData?.cart_products?.map(
        item => resultPay = resultPay + (item.product_price * item.count)
    )


    return (
        <section className='py-4'>
            <div className="container mx-auto px-4">
                <table className="product-table">
                    <tbody>
                        {selectedProductData.cart_products?.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={product.product_image} alt="" />
                                    </td>
                                    <td>
                                        <h3>{product.product_name}</h3>
                                    </td>
                                    <td>
                                        <h3>{product.product_color}</h3>
                                    </td>
                                    <td>
                                        <h3>{product.product_memory}</h3>
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(decrementCount(product.id))}>-</button>
                                        <span>{product.count}</span>
                                        <button onClick={() => dispatch(incrementCount(product.id))}>+</button>
                                    </td>
                                    <td>
                                        <h3 >{(product.product_price * product.count).toFixed(2)}</h3>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faPen} id={product.id} onClick={() => onclickEdit(product.id)} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(deleteSelectedProduct(product.id))} />
                                    </td>
                                    {isShow ?
                                        <EditProductDataModal
                                            changeShowedModal={() => setIsShow(false)}
                                            show={isShow}
                                            id={activeId}
                                            selectedColor={product.product_color} selectedMemo={product.product_memory} />
                                        : null
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={7}>Ümumi məbləğ:</td>
                            <td>
                                {resultPay.toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default Cart
