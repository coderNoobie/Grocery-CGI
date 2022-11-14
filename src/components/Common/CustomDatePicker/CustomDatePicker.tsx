import React from "react";
import { DatePicker } from "@mantine/dates";
import { CustomDatePickerProps } from "./CustomDatePicker.d";
import dayjs from "dayjs";

function CustomDatePicker(props: CustomDatePickerProps) {
  return (
    <DatePicker
      placeholder={props.placeHolder ? props.placeHolder : "Pick Date"}
      onChange={props.onChange}
      value={props.value}
      clearable={false}
      disabled={props.disabled}
      minDate={props.minDate ? dayjs(props.minDate).toDate() : undefined}
      maxDate={dayjs(new Date()).toDate()}
    />
  );
}

export default CustomDatePicker;
