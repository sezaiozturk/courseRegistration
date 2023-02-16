import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "dscbnf",
    number: 0,
    lesson: ''
}
export const nameSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        save: (state, action) => {
            state.name = action.payload
        }
    }
})
export const { save } = nameSlice.actions;
export default nameSlice.reducer;