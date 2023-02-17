import { configureStore } from '@reduxjs/toolkit'
import filterProductSlice from '../features/filter'
import cartProductSlicer from '../features/cartProductSlicer'

const store = configureStore({
    reducer: {
        product: filterProductSlice,
        cart_product: cartProductSlicer
    }
})

export default store
