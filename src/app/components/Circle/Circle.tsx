import React from "react";
import { Container, Text } from "./style";

interface PercentProps {
  qnty?: number;
  card: boolean;
}

interface PageProps {
  number: number;
}

export function Percent(props: PercentProps) {
  return (
    <Container card={props.card}>
      <Text>{props.qnty}%</Text>
    </Container>
  );
}

export function Pagination(props: PageProps) {
  return (
    <Container pagination>
      <Text pagination>{props.number}</Text>
    </Container>
  );
}
