import { useSelector } from "react-redux"

export default function ShoppingBagPage() {
  const selectedProductData = useSelector(state => state)

  return (
    <div>
      <table>
        <tbody>
          {console.log(selectedProductData)}
          {selectedProductData.cart_product?.map(product => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.product_image} alt="" />
                </td>
                <td>{product.product_name}</td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>{product.product_price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
