import { createSlice } from '@reduxjs/toolkit'

const cartProductSlice = createSlice({
    name: 'cart_products',
    initialState: [],
    reducers: {
        setSelectedProducts: {
            reducer(state, { payload }) {
                state.unshift(payload)
            },
            prepare(id, product_image, product_name, product_price, product_color, product_memory, product_brand) {
                return {
                    payload: {
                        id,
                        product_image,
                        product_name,
                        product_price,
                        product_color,
                        product_memory,
                        count: 1,
                        product_brand
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
                count: item.count < 10 ? item.count += 1 : 10
            } : {
                item
            }
            )
        },
        decrementCount: (state, { payload }) => {
            state = state.filter(item => item.id === payload ? {
                ...item,
                count: item.count > 1 ? item.count -= 1 : 1
            } : {
                item
            }
            )
        },
        editSelectedProduct: (state, { payload }) => {
            return state = state.map(item => item.id === payload.id ? {
                ...item,
                    product_color: payload.color,
                    product_memory: payload.memo
            }
                : item
            )
        }
    }
})

export const { setSelectedProducts, deleteSelectedProduct, incrementCount, decrementCount,  editSelectedProduct} = cartProductSlice.actions

export default cartProductSlice.reducer
