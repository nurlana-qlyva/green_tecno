import { useCallback, useState, useEffect } from 'react'
import data from './../../../data/data.json'


export default function CreaditModal({name, price, image}) {
    const [monthVal, setMonthVal] = useState(6)
    let [productCount, setProductCount] = useState(1)

    const getCreditMonthAmount = useCallback((e) => {
        setMonthVal(e.target.value)
    }, [])

    const incrementProductCount = useCallback(() => {
        setProductCount(productCount++)
    }, [])

    const decrementProductCount = useCallback(() => {
            setProductCount(productCount--)
    }, [])

    const resultPay = (price * productCount).toFixed(2)
    const monthlyPay = (resultPay / monthVal).toFixed(2)

    return (
        <div className="credit-modal" id='credit-modal'>
            <h2>Hissə-hissə ödəniş</h2>
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
                            <input type="number" value={productCount} />
                            <button onClick={incrementProductCount}>+</button>
                        </td>
                        <td>
                            <h4>{resultPay}</h4>
                        </td>
                    </tr>
                </tbody>
            </table>


            <ul className='month'>
                {data.credit_month?.map(({id, amount}) => {
                    return <li key={id} value={amount} className={amount === monthVal
                     ? 'active' : null} onClick={getCreditMonthAmount}>
                        {amount} ay
                    </li>
                })}
            </ul>

            <ul className='result'>
                <li>
                    <h4>Müddət</h4>
                    <p>{monthVal}</p>
                </li>
                <li>
                    <h4>İlkin ödəniş</h4>
                    <p>0₼</p>
                </li>
                <li>
                    <h4>Aylıq ödəniş</h4>
                    <p>{monthlyPay}</p>
                </li>
            </ul>

            <div>
                <button>Sifarişi rəsmiləşdir</button>
            </div>
        </div>
    )
}
