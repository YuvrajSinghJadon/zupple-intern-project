import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id :null,
    dataArray: []
}

const blockchainSlice = createSlice({
    name: 'blockchain',
    initialState,
    reducers:{
        updateId: (state, action )=> {
            state.dataArray = []
            state.id= action.payload
            
        },
        updateDataArray: (state, action ) => {
            state.dataArray.push(action.payload)
        }
    }
})

export const {updateId, updateDataArray} = blockchainSlice.actions;
export default blockchainSlice.reducer;