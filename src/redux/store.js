import { configureStore } from "@reduxjs/toolkit";
import  CovidDataSlice  from "./CovidDataSlice";
export const store = configureStore({
    reducer: {
        covidData: CovidDataSlice
    }
});