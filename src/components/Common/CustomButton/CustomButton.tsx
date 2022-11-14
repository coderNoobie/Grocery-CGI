import React from "react";
import { CustomButtonProps } from "./CustomButton.d";
import { Button } from "@mantine/core";
function CustomButton(props: React.PropsWithChildren<CustomButtonProps>) {
  return (
    <Button
      styles={(theme) => ({
        root: {
          backgroundColor: "#5236ab",
          "&:hover": {
            backgroundColor: theme.fn.darken("#5236ab", 0.05),
          },
        },
      })}
      disabled={props.disabled ? props.disabled : false}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
