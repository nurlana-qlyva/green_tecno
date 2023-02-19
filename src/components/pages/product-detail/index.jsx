import data from './../../../data/products.json'
import { HeartIcon } from './../../../icons'
import { Scrollbar, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useParams } from 'react-router'
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedProducts } from './../../../features/cartProductSlicer'
import MonthlyPayModal from './../../ui/monthly-paying-modal'


const ProductDetail = () => {
    // params 
    const { productId } = useParams()
    // states
    const [productColor, setProductColor] = useState('Grey')
    const [productMemo, setProductMemo] = useState('64 GB')
    const [isShow, setIsShow] = useState(false)

    // dispatch 
    const dispatch = useDispatch()

    // get product
    const getProduct = data.products?.find(product => Number(productId) === product?.id)
    const { id, name, image, price, speacilities, image_slider, brand_id, colors, storages } = getProduct

    // get product color and memory value
    const getProductMemo = useCallback((e) => {
        setProductMemo(e.target.value)
    }, [])

    const getproductColor = useCallback((e) => {
        setProductColor(e.target.value)
    }, [])

    // filtering for color or memory
    const getFilteredProductDataForMemo = speacilities?.find(product => product?.storage_id === Number(productMemo))

    // data in cart
    const selectedProductData = useSelector(state => state)

    // sending data into cart
    const sendProductsIntoCart = useCallback(() => {
        if (selectedProductData.cart_products?.length === 0) {
            dispatch(setSelectedProducts(id, image, name, price, productColor, productMemo, brand_id))
            alert('this product is added')
        } else if (selectedProductData.cart_products?.length > 0) {
            selectedProductData.cart_products?.find(item => {
                if (item.id === Number(id)) {
                    alert('this product has been added')
                    return item
                } else {
                    dispatch(setSelectedProducts(id, image, name, price, productColor, productMemo, brand_id))
                    alert('this product is added')
                    return item
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
                                            <img src='${image_slider[index]?.image}'/>
                                    </span>`
                                }
                            }}
                        >
                            {image_slider?.map(({ id, image }) => {
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
                            <h2>{name}</h2>
                            <p>Brand: {brand_id}</p>
                            <p>${price}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="product-brand">
                                <h4>Brand:</h4>
                                <p>{brand_id}</p>
                            </div>
                            <div className="product-colors">
                                <h4>Rənglər</h4>
                                {colors?.map(({ id, color, color_name }) => {
                                    return (
                                        <>
                                            <input key={id} type="radio" name="color" style={{ background: color }} value={color_name} onClick={getproductColor} />
                                        </>
                                    )
                                })}
                            </div>
                            <div className="product-storage">
                                <h4>Yaddaş</h4>
                                <div>
                                    {storages?.map(({ id, storage }) => {
                                        return (
                                            <button
                                                key={id}
                                                value={storage}
                                                className={'active'}
                                                onClick={getProductMemo}
                                            >
                                                {storage}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {getFilteredProductDataForMemo?.product_speacilities?.map((product, index) => {
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
                            <p className='grid grid-cols-2'>
                                <span>
                                    Rəng:
                                </span>
                                <span>
                                    {productColor}
                                </span>
                            </p>
                        </div>

                        <div className="buttons flex gap-2">
                            <button onClick={sendProductsIntoCart}>Səbətə əlavə et</button>
                            <button onClick={setIsShowModal}>Hissə-hissə ödəniş</button>
                            <button><HeartIcon /></button>
                        </div>
                    </div>
                </div>
            </div>

            {isShow ? <MonthlyPayModal image={image} name={name} price={price} color={productColor} memo={productMemo} changeShowedModal={setIsShowModal} /> : null}
        </section>
    )
}

export default ProductDetail
