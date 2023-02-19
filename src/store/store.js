import { configureStore } from '@reduxjs/toolkit'
import filterProductsSlice from './../features/filterProductsSlice'
import cartProductSlicer from '../features/cartProductSlicer'

const store = configureStore({
    reducer: {
       product: filterProductsSlice,
       cart_products: cartProductSlicer
    }
})

export default store
