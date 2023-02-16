import data from './data.json'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ProductsModal({ value, onClickOutside, show }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target !== 'input' && e.target.id !== 'search-modal') {
                console.log('yes')
                onClickOutside && onClickOutside();
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [onClickOutside])

    if (!show) {
        return null;
    } else {
        return (
            <div className="search-result" id='search-modal'>
                <ul>
                    {(data.products.filter(product => {
                        if (value == '') {
                            return product;
                        } else if (product.product.toLowerCase().includes(value.toLowerCase())) {
                            return product;
                        }
                    })).map(product => {
                        return <li key={product.id}>
                            <Link className='flex items-center' to={''}>
                                <div>
                                    <img src={product.image} alt="greentecno" />
                                </div>
                                <div>
                                    <h4>{product.product}</h4>
                                    <p>{product.price}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        )
    }



}
