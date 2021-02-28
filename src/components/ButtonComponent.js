import Button from "@material-ui/core/Button";
import React from "react";

export default function ButtonComponent(props) {
  return (
    <Button
      variant="contained"
      color={props.color}
      startIcon={props.icon}
      onClick={props.function}
      style={props.style}
    >
      {props.text}
    </Button>
  );
}
