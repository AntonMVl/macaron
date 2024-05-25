'use client'
import { createSlice } from '@reduxjs/toolkit'
const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		basketCounter: 0,
	},
	reducers: {
		addProductToBasket(store) {
			store.basketCounter += 1
		},
	},
})

export const { addProductToBasket } = basketSlice.actions

export default basketSlice.reducer
