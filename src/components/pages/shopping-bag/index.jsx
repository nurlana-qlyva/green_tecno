import { useDispatch, useSelector } from "react-redux"
// import ProductDetail from "../product-detail"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { deleteSelectedProduct, incrementCount, decrementCount, editSelectedProduct } from './../../../features/cartProductSlicer'
import EditModal from './../../core/edit-modal'
import { useCallback, useState } from "react"



export default function ShoppingBagPage() {
  const [isShow, setIsShow] = useState(false)
  const selectedProductData = useSelector(state => state)
  const dispatch = useDispatch()

  const setIsShowModal = useCallback(() => {
    setIsShow(!isShow)
  }, [isShow])

  return (
    <div className="bag-table">
      <table>
        <tbody>
          {selectedProductData.cart_product?.map(product => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.product_image} alt="" />
                </td>
                <td>{product.product_name}</td>
                <td>
                  <button onClick={() => dispatch(decrementCount(product.id))}>-</button>
                  <input type="text" value={product.count} />
                  <button onClick={() => dispatch(incrementCount(product.id))}>+</button>
                </td>
                <td>{(product.count * product.product_price).toFixed(2)}</td>
                <td>
                  <button >
                    <FontAwesomeIcon icon={faPen} onClick={setIsShowModal} />
                  </button>
                  <button onClick={() => dispatch(deleteSelectedProduct(product.id))}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>


      {isShow ? <EditModal changeShowedModal={setIsShowModal}/> : null}

    </div>
  )
}
