import { Link, NavLink } from 'react-router-dom'
import { HeartIcon, ShoppingBasketİcon } from './../../../icons'
import data from './../../../data/header.json'

const TopHeader = () => {
    return (
        <div className="gt-top-header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="gt-logo text-[36px]">
                        <Link to={''}>
                            <span>{data.green_logo}</span><span>{data.tecno_logo}</span>
                        </Link>
                    </div>
                    <nav className="gt-navbar text-[24px]">
                        <ul>
                            {data.menus.map(path => {
                                return <li className='inline-block' key={path.name}>
                                    <NavLink to={path.path}>{path.name}</NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <div className="gt-cart-icons">
                        <ul>
                            <li className='inline-block'>
                                <Link to={''}>
                                    <HeartIcon />
                                </Link>
                            </li>
                            <li className='inline-block'>
                                <Link to={'/cart'}>
                                    <ShoppingBasketİcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
