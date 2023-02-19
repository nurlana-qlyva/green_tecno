import { useCallback, useState } from 'react'
import data from './../../../data/products.json'

const MonthlyPayModal = ({ name, price, image, changeShowedModal, color, memo }) => {
    let [count, setCount] = useState(1)
    const [monthVal, setMonthVal] = useState(6)

    const increaseCount = useCallback(() => {
        count < 10 ? setCount(count++) : setCount(10)
    }, [])

    const decreaseCount = useCallback(() => {
        count > 1 ? setCount(count--) : setCount(1)
    }, [])

    const getCreditMonthAmount = useCallback((e) => {
        setMonthVal(e.target.value)
    }, [])

    const resultPay = (price * count).toFixed(2)
    const monthlyPay = (resultPay / monthVal).toFixed(2)

    return (
        <div className="credit-modal" id='credit-modal'>
            <div className='flex justify-end'>
                <div className='close-button' onClick={() => changeShowedModal()}>X</div>
            </div>
            <h2>Hissə-hissə ödəniş</h2>

            <table className="product-table">
                <tbody>
                    <tr>
                        <td>
                            <img src={image} alt="" />
                        </td>
                        <td>
                            <h3>{name}</h3>
                        </td>
                        <td>
                            <h3>{color}</h3>
                        </td>
                        <td>
                            <h3>{memo}</h3>
                        </td>
                        <td>
                            <button onClick={decreaseCount}>-</button>
                            <span>{count}</span>
                            <button onClick={increaseCount}>+</button>
                        </td>
                        <td>
                            <h3 >{(price * count).toFixed(2)}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className='month'>
                {data.credit_month?.map(({ id, amount }) => {
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

export default MonthlyPayModal
