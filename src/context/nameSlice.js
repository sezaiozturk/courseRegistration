import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    number: 0,
    lessonList: []
}
export const nameSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        save: (state, action) => {
            state.number = action.payload[0],
                state.name = action.payload[1]
        },
        addLesson: (state, action) => {
            state.lessonList = [...state.lessonList, action.payload];
        }
    }
})
export const { save, addLesson } = nameSlice.actions;
export default nameSlice.reducer;