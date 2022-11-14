import React, { useState } from "react";
import CustomButton from "../Common/CustomButton/CustomButton";
import { Input } from "@mantine/core";
import "./TableComponent.css";

function TableComponent() {
  const [buttonEnable, enableButton] = useState<boolean>(false);
  const [seatchInput, setSearchInput] = useState<string>("");
  const fetchData = () => {};
  return (
    <>
      <div className="Search-btn">
        <Input placeholder="Search Item" />
        <div className="button-div">
          <CustomButton disabled={!buttonEnable} onClick={fetchData}>
            Search
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default TableComponent;
