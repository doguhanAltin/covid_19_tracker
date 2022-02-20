import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getInitialDataAsync } from "../redux/CovidDataSlice";
import './DropDownInput.css'
function DropDownInput() {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Global");
  useEffect(async () => {
    await axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => res.data)
      .then((data) => data.countries)
      .then((names) =>setCountries(names)
      );
  }, []);
  useEffect(()=>{
    console.log(selectedCountry)
      dispatch(getInitialDataAsync(selectedCountry))
  },[selectedCountry]);

  return (
    <select className="selectInput" onChange={(e)=> setSelectedCountry(e.target.value)}>
        <option value="Global" >Global</option>
        {countries.map((i)=>(<option value={i.name}>{i.name}</option>))}

    </select>
  );
}

export default DropDownInput;
