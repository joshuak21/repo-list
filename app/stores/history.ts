import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface HistorySearchInterface {
	history: string[],
}

const initialState: HistorySearchInterface = {
	history: [],
}

export const slice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		pushSearch: (state, action: PayloadAction<string>) => {
			state.history.push(action.payload)
		},

		removeSearch: (state, action: PayloadAction<number>) => {
			state.history.splice(action.payload, 1)
		},

		removeAll: (state) => {
			state.history = []
		}
	}
})

export const {
	pushSearch,
	removeSearch,
	removeAll,
} = slice.actions

export const history =  slice.reducer