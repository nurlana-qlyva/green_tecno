import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const cartProductSlice = createSlice({
    name: 'cart_products',
    initialState: [],
    reducers: {
        setSelectedProducts: {
            reducer (state, {payload}) {
                state.unshift(payload)
            },
            prepare (product_image, product_name, product_brand, product_price, product_color, product_memory, count) {
                return {
                    payload: {
                        id: nanoid(),
                        product_image,
                        product_name,
                        product_brand,
                        product_price,
                        product_color,
                        product_memory,
                        count
                    }
                }
            }
        }
    }
})

export const {setSelectedProducts} = cartProductSlice.actions

export default cartProductSlice.reducer
