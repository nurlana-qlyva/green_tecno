import { createSlice } from '@reduxjs/toolkit'

const cartProductSlice = createSlice({
    name: 'cart_products',
    initialState: [],
    reducers: {
        setSelectedProducts: {
            reducer(state, { payload }) {
                state.unshift(payload)
            },
            prepare(id, product_image, product_name, product_brand, product_price, product_color, product_memory) {
                return {
                    payload: {
                        id,
                        product_image,
                        product_name,
                        product_brand,
                        product_price,
                        product_color,
                        product_memory,
                        count: 1
                    }
                }
            }
        },
        deleteSelectedProduct(state, { payload }) {
            return state = state.filter(item => item.id !== payload)
        },
        incrementCount: (state, { payload }) => {
            state = state.filter(item => item.id === payload ? {
                ...item,
                count: item.count += 1
            } : {
                item
            }
            )
        },
        decrementCount: (state, { payload }) => {
            state = state.filter(item => item.id === payload ? {
                    ...item,
                    count: item.count -= 1
                } : {
                    item
                }
            )
        },
        editSelectedProduct: (state, { payload }) => {
            state = state.filter(item => item.id === payload ? {
                    ...item,
                    product_name: payload
                }
                 : {
                    item
                }
            )
        }
    }
})

export const { setSelectedProducts, deleteSelectedProduct, incrementCount, decrementCount, editSelectedProduct } = cartProductSlice.actions

export default cartProductSlice.reducer
