import React from "react";
import { Select } from "@mantine/core";
import { DropDownFilterProps } from "./DropDownFilter.d";

function DropDownFilter (props: DropDownFilterProps){
    return (
        <Select
          value={props.value}
          data={props.data}
          searchable
          label={props.label}
          onChange={props.onChange}
          nothingFound="Nothing Found"
        />
    );
}
export default DropDownFilter