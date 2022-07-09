import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './features/modalSlice'
import themeReducer from './features/themeSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    theme: themeReducer
  }
})