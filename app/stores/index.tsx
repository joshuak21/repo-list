import { configureStore } from '@reduxjs/toolkit'

import * as HistoryStore from './history'

export const AppStore = [
	HistoryStore.slice,
]

export interface StoreInterface {
	history: HistoryStore.HistorySearchInterface,
}

export default configureStore({
	reducer: {
		history: HistoryStore.history,
	}
})