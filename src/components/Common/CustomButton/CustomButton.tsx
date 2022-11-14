import React from "react";
import { CustomButtonProps } from "./CustomButton.d";
import { Button } from "@mantine/core";
function CustomButton(props: React.PropsWithChildren<CustomButtonProps>) {
  return (
    <Button
      disabled={props.disabled ? props.disabled : false}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
