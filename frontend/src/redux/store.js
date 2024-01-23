import { configureStore } from '@reduxjs/toolkit'
import blockchainSlice from './slices/blockchainSlice'

export const store = configureStore({
  reducer: {blockchainSlice: blockchainSlice},
})

export default store;

