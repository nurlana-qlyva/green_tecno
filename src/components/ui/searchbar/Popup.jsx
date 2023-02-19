import data from './../../../data/products.json'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Popup = ({ value, onClickOutside, show }) => {

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
            <div className="gt-search-result" id='search-popup'>
                <ul>
                    {(data.products.filter(product => {
                        if (value === '') {
                            return product;
                        } else if (product.name.toLowerCase().includes(value.toLowerCase())) {
                            return product;
                        }
                    })).map(product => {
                        return <li key={product.id}>
                            <Link className='flex items-center' to={`/products/${product.id}`}>
                                <div>
                                    <img src={product.image} alt="greentecno" />
                                </div>
                                <div>
                                    <h4>{product.name}</h4>
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

export default  Popup
