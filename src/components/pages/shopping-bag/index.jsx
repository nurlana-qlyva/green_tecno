import { useSelector } from "react-redux"

export default function ShoppingBagPage() {
  const selectedProductData = useSelector(state => state)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td></td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {console.log(selectedProductData)}
          {selectedProductData.cart_product?.map(product => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.product_image} alt="" />
                </td>
                <td>{product.product_name}</td>
                <td></td>
                <td>{product.product_price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
