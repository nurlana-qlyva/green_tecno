import { useCallback } from 'react'

export default function ProductDetailTable({ setProductCount, productCount, name, image, resultPay }) {

    const incrementProductCount = useCallback(() => {
        setProductCount(productCount++)
    }, [])

    const decrementProductCount = useCallback(() => {
        setProductCount(productCount--)
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={image} alt="green tecno" />
                        </td>
                        <td>
                            <h4>{name}</h4>
                        </td>
                        <td>
                            <button onClick={decrementProductCount}>-</button>
                            <input type="text" value={productCount} />
                            <button onClick={incrementProductCount}>+</button>
                        </td>
                        <td>
                            <h4>{resultPay}</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
