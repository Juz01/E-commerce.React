import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name:'products',
    initialState:null,
    reducers:{
        setProducG:(state, action) => action.payload
    }
})

const {setProducG} = productsSlice.actions

export default productsSlice.reducer

const defaultUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
export const getAllProductThunk = (url = defaultUrl ) => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setProducG(res.data)))
    .catch(err => console.log(err))
}