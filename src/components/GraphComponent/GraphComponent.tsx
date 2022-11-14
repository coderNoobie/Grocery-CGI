import React,{ useEffect, useState } from "react";
import CONSTANTS from "../../utils/constants";
import { get } from "../../utils/http";
import CustomButton from "../Common/CustomButton/CustomButton";
import CustomDatePicker from "../Common/CustomDatePicker/CustomDatePicker";
import DropDownFilter from "../Common/DropDownFilter/DropDownFilter";
import { Loader } from "@mantine/core";
import { convertDatetoYYYYMMHH } from "../../utils/commons";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import CsvDownload from "react-json-to-csv";
import './GraphComponent.css';

function GraphComponent(props: any) {
  const [name, setName] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [itemList, setItemList] = useState<any>([]);

  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  //Button states
  const [buttonEnable, enableButton] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [graphData, setGraphData] = useState<any>(undefined);

  const headers: String[] = ["itemName", "price", "datesk"];

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
    getProductDetails();
  }

  useEffect(() => {
    checkButtonDisable();
  }, [item, fromDate, toDate]);

  function getProductsFromAPI() {
    setIsLoading(true);
    get(CONSTANTS.GET_DISTINT_PRODUCTS_URL)
      .then((data) => {
        setItemList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function getProductDetails() {
    setIsLoading(true);
    var options: any = {};
    var query: any = {};
    query.itemName = item;
    query.from = convertDatetoYYYYMMHH(fromDate as Date);
    query.to = convertDatetoYYYYMMHH(toDate as Date);
    query.greaterThan = 0.0;
    options.query = query;
    get(CONSTANTS.GET_DETAILS_URL, options)
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setGraphData(data);
        // setItemList(data)
        // setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getProductsFromAPI();
  }, []);
  return (
    <div>
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div>
          <div className="Search-Filter">
            <DropDownFilter
              value={item}
              data={itemList}
              placeholder="Pick Item"
              // label="Pick Item"
              onChange={setItem}
            />
            <CustomDatePicker
              value={fromDate}
              onChange={setFromDate}
              placeHolder="Select From Date"
            />
            <CustomDatePicker
              disabled={!fromDate}
              value={toDate}
              onChange={setToDate}
              minDate={fromDate}
              placeHolder="Select To Date"
            />
            <CustomButton disabled={!buttonEnable} onClick={fetchData}>
              Search
            </CustomButton>
          </div>
          <div className="nodata-txt">
            {!graphData && <>Please select Data from Filters</>}
          </div>
          {graphData && graphData.length > 0 && (
            <>
              <LineChart
                className="graph-block"
                width={1000}
                height={600}
                data={graphData}
              >
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <XAxis dataKey="datesk" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
              <div className="csv-download">
                <CsvDownload className="download-btn" data={graphData}>
                  Download Report
                </CsvDownload>
              </div>
            </>
          )}
          {graphData && graphData.length == 0 && (
            <p className="nodata-txt">Sorry no records foundx</p>
          )}
        </div>
      )}
    </div>
  );
}
export default GraphComponent;
