import React from "react";
import { Button } from "./style";

interface PropsButton {
  title: string;
}

export default function ButtonCategorie(props: PropsButton) {
  return <Button>{props.title}</Button>;
}
