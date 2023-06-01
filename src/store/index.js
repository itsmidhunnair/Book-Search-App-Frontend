import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slice'

const reducer ={
    book: bookSlice
}

const store = configureStore({
    reducer: reducer
})

export default store