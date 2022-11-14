import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomDatePicker from './components/Common/CustomDatePicker/CustomDatePicker';
import DropDownFilter from './components/Common/DropDownFilter/DropDownFilter';
import CustomButton from './components/Common/CustomButton/CustomButton';
import GraphComponent from './components/GraphComponent/GraphComponent';
import TopNav from "./components/TopNav/TopNav";

function App() {
  const [name, setName] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [itemList, setItemList] = useState<any>([
    "sai",
    "kumnar",
    "SAIAS",
    "KUMAR",
  ]);

  const [fromDate, setFromDate] = useState(undefined);
  const [toDate, setToDate] = useState(undefined);

  //Button states
  const [buttonEnable, enableButton] = useState<boolean>(false);

  function handleInputChange(e: any) {
    setName(e.target.value);
  }

  function checkButtonDisable() {
    console.log("Button checking");
    if (item && fromDate && toDate) {
      enableButton(true);
    }
  }

  function fetchData() {
    console.log("Fetch data from API");
    console.log("Fetching data for");
    console.log(item);
    //console.log(fromDate.getTime())
    console.log(toDate);
  }

  useEffect(() => {
    checkButtonDisable();
  }, [item, fromDate, toDate]);

  function fromChild(e: any) {
    console.log("From child rero");
    //console.log(date)
    console.log(item);
  }
  return (
    <>
      <TopNav />
      {/* <GraphComponent /> */}
      {/* <header> */}
      {/* <input value={name} onChange={fromChild}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      {/* <DropDownFilter value={'item'} data={itemList} label="Pick Item" onChange={setItem}/>
        <CustomDatePicker value={fromDate} onChange={setFromDate} placeHolder="Select From Date"/>
        <CustomDatePicker disabled={!fromDate} value={toDate} onChange={setToDate} minDate={fromDate} placeHolder="Select To Date"/>
        <CustomButton disabled={!buttonEnable} onClick={fetchData}>Search</CustomButton> */}
      {/* </header> */}
    </>
  );
}

export default App;
