import { useCallback, useState } from 'react'
import data from './../../../data/data.json'
import ProductDetailTable from '../product-detail-table'


export default function CreaditModal({ name, price, image, changeShowedModal }) {
    const [monthVal, setMonthVal] = useState(6)
    let [productCount, setProductCount] = useState(1)

    const getCreditMonthAmount = useCallback((e) => {
        setMonthVal(e.target.value)
    }, [])


    const resultPay = (price * productCount).toFixed(2)
    const monthlyPay = (resultPay / monthVal).toFixed(2)

    return (
        <div className="credit-modal" id='credit-modal'>
            <div className='flex justify-end'>
                <div className='close-button' onClick={() => changeShowedModal()}>X</div>
            </div>
            <h2>Hissə-hissə ödəniş</h2>
            <ProductDetailTable setProductCount={setProductCount} productCount={productCount} name={name} image={image} resultPay={resultPay}/>


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
