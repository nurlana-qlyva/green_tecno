import { useParams } from 'react-router'
import data from './../../../data/data.json'
import { HeartIcon } from '../../../icons'
import { Scrollbar, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { setSelectedProducts } from '../../../features/cartProductSlicer'
import CreaditModal from '../../core/credit-modal'

export default function ProductDetail() {
    const { productId } = useParams()
    const [memoryVal, setMemoryVal] = useState(1)
    const [colorVal, setColorVal] = useState(1)
    const [isShow, setIsShow] = useState(false)
    const selectedProductData = useSelector(state => state)
    const dispatch = useDispatch()

    const getProductDetail = data.products?.find(product => Number(productId) === product.id)
    const { id, name, image, price, speacilities } = getProductDetail

    const getProductMemoryValue = useCallback((e) => {
        setMemoryVal(e.target.value)
    })

    const getProductColorValue = useCallback((e) => {
        setColorVal(e.target.value)
    })

    const getFilteredDataForMemory = speacilities?.find(product => product?.storage_id === Number(memoryVal))


    const sendProductsIntoBag = useCallback(() => {
        if (selectedProductData.cart_product?.length === 0) {
            dispatch(setSelectedProducts(id, image, name, null, price, colorVal, memoryVal))
            alert('this product is added')
        } else if (selectedProductData.cart_product?.length > 0) {
            selectedProductData.cart_product?.find(item => {
                if (item.id === Number(productId)) {
                    alert('this product has been added') 
                    return item
                }else {
                    dispatch(setSelectedProducts(id, image, name, null, price, colorVal, memoryVal))
                    alert('this product is added')
                }
            })
        }
    })

    const setIsShowModal = () => {
        setIsShow(!isShow)
    }

    return (
        <section className="product-detail">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className='product-image-slider'>
                        <Swiper
                            modules={[Navigation, Scrollbar, Pagination]}
                            slidesPerView={1}
                            navigation
                            pagination={{
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return `<span class='${className}'>
                                            <img src='${getProductDetail?.image_slider[index]?.image}'/>
                                    </span>`
                                }
                            }}
                        >
                            {getProductDetail?.image_slider?.map(({ id, image }) => {
                                return <SwiperSlide key={id}>
                                    <div className="product-image">
                                        <img src={image} alt="greentecno" />
                                    </div>

                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                    <div className="product-info">
                        <div>
                            <h2>{getProductDetail.name}</h2>
                            <p>Brand: {getProductDetail.brand_id}</p>
                            <p>${getProductDetail.price}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="product-colors">
                                <h4>Rənglər</h4>
                                <div>
                                    {getProductDetail.colors?.map(({ id, color }) => {
                                        return (
                                            <input key={id} type="radio" name="color" style={{ background: color }} value={id} onChange={getProductColorValue} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="product-storage">
                                <h4>Yaddaş</h4>
                                <div>
                                    {getProductDetail.storages?.map(({ id, storage }) => {
                                        return (
                                            <button key={id} value={id} onClick={getProductMemoryValue}>{storage}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {getFilteredDataForMemory?.product_speacilities?.map((product, index) => {
                                    return <li key={index} className='grid grid-cols-2'>
                                        <span>
                                            {product.key}:
                                        </span>
                                        <span>
                                            {product.value}
                                        </span>
                                    </li>
                                })}
                            </ul>
                            <p>Color: {colorVal}</p>
                        </div>

                        <div className="buttons flex gap-2">
                            <button onClick={sendProductsIntoBag}>Səbətə əlavə et</button>
                            <button onClick={setIsShowModal}>Hissə-hissə ödəniş</button>
                            <button><HeartIcon /></button>
                        </div>
                    </div>
                </div>

                {isShow ? <CreaditModal image={image} name={name} price={price} changeShowedModal={setIsShowModal} /> : null}
            </div>
        </section>
    )
}
