import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInitialDataAsync } from "./redux/CovidDataSlice";
import CovidDataCard from "./components/CovidDataCard";
import DropDownInput from "./components/DropDownInput";
import CovidDataChart from "./components/CovidDataChart";
function App() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.covidData.items);
  const isLoading = useSelector((state) => state.covidData.isLoading);

  return (
    <div className="App">
      <h1>Covid Report</h1>
      <div className="dataCard">
      <CovidDataCard  data={items.confirmed} name= {"Infected"} date={items.lastUpdate} bgColor="lightskyblue" />
      <CovidDataCard  data={items.recovered} name= {"Recovered"} date={items.lastUpdate} bgColor="lawngreen" />
      <CovidDataCard  data={items.deaths} name= {"Deaths"} date={items.lastUpdate}  bgColor="red"  />
      <CovidDataCard  data={items.active} name= {"Active"} date={items.lastUpdate} bgColor="khaki"/>
      </div>
      <DropDownInput />
      <CovidDataChart />

     </div>
  );
}

export default App;
