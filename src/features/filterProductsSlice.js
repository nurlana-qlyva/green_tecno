import { createSlice } from '@reduxjs/toolkit'

const filterProductsSlice = createSlice({
    name: 'product',
    initialState: {
        selectedCategory: '',
        selectedBrand: '',
        selectedSortingOption: 1,
        selectedPrice: [0, 500]
    },
    reducers: {
        setSelectedCategory (state, {payload}) {
            state.selectedCategory = payload
        },
        setSelectedBrand (state, {payload}) {
            state.selectedBrand = payload
        },
        setSelectedSortingOption (state, {payload}) {
            state.selectedSortingOption = payload
        },
        setSelectedPrice (state, {payload}) {
            state.selectedPrice = payload
        }
    }
})

export const {setSelectedCategory, setSelectedBrand, setSelectedSortingOption, setSelectedPrice} = filterProductsSlice.actions

export default filterProductsSlice.reducer
