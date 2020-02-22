import React from "react";
import { Container, Input } from "./style";

interface SearchProps {
  placeHolder: String;
  onChange: (text: string) => any;
}

export default function Search(props: SearchProps) {
  return (
    <Container>
      <Input
        placeholder={props.placeHolder}
        type="text"
        onChange={props.onChange}
      />
    </Container>
  );
}
