import { Link, NavLink } from 'react-router-dom'
import data from './data.json'
import { HeartIcon, ShoppingBasketİcon } from './../../../icons'

export default function TopHeader() {
    return (
        <div className="top-header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="green-tecno-logo text-[36px]">
                        <Link to={''}>
                            <span>{data.green_logo}</span><span>{data.tecno_logo}</span>
                        </Link>
                    </div>
                    <nav className="green-tecno-navbar text-[24px]">
                        <ul>
                            {data.menus.map(path => {
                                return <li className='inline-block' key={path.name}>
                                    <NavLink to={path.path}>{path.name}</NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <div className="green-tecno-header-icons">
                        <ul>
                            <li className='inline-block'>
                                <Link to={''}>
                                    <HeartIcon />
                                </Link>
                            </li>
                            <li className='inline-block'>
                                <Link to={'/səbət'}>
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
