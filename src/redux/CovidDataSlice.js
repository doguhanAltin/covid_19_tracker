import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialDataAsync = createAsyncThunk('covidDataSlice/getInitialDataAsync', async (country)=>{
 if(country === "Global"){
    const res = await axios.get('https://covid19.mathdro.id/api')
    return res.data;

 }else {
    const res = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    return res.data;

 }

});

export const CovidDataSlice = createSlice({
    name: "covidData",
    initialState:{
        items: {
            confirmed:0,
            recovered:0,
            deaths:0,
            active:0,
            lastUpdate:"",
        },
        isLoading: false 

    },
    reducers: {
    },
    extraReducers:{
        [getInitialDataAsync.pending] :(state)=>{
            console.log("sa")
            state.isLoading= true;

        },
        [getInitialDataAsync.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.items.confirmed= action.payload.confirmed.value;
            state.items.recovered= action.payload.recovered.value;
            state.items.deaths= action.payload.deaths.value;
            state.items.active= state.items.confirmed-state.items.recovered-state.items.deaths;
            state.items.lastUpdate= action.payload.lastUpdate
            state.isLoading= false;
        },
        [getInitialDataAsync.rejected] : (state)=>{
            state.isLoading= false;

        },
   

    }

})

export default CovidDataSlice.reducer;