import { useParams } from 'react-router'
import data from './../../../data/data.json'
import { Scrollbar, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProductDetail() {
    const { productId } = useParams()

    const getProductDetail = data.products.find(product => Number(productId) === product.id)

    return (
        <section className="product-detail">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className='product-image-slider'>
                        <Swiper
                            modules={[Navigation, Scrollbar, Pagination]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {getProductDetail.image_slider?.map(({ id, image }) => {
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
                                            <input key={id} type="radio" name="color" style={{ background: color }} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="product-storage">
                                <h4>Yaddaş</h4>
                                <div>
                                    {getProductDetail.storages?.map(({ id, storage }) => {
                                        return (
                                            <button key={id}>{storage}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
