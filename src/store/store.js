import { configureStore } from '@reduxjs/toolkit'
import filterProductSlice from '../features/filter'

const store = configureStore({
    reducer: {
        product: filterProductSlice
    }
})

export default store
