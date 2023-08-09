'use client'
import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
        },
    },
})

export const {addItem, total} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => {
    let total = 0
    state.basket?.items?.map((item) => {
        total += item.price
    })
    return total
}

export default basketSlice.reducer;