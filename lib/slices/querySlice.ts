import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: ""
}

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.stock = action.payload
        }
    }
})

export const { setQuery } = querySlice.actions
export default querySlice.reducer