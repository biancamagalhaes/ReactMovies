import React from "react";
import { Percent } from "../Circle/Circle";
import { Container, Title, Date, TextContainer } from "./style";

interface HeaderCardProps {
  percent?: number;
  title: string;
  date: string;
}

export function Header() {
  return (
    <Container>
      <Title>Movies</Title>
    </Container>
  );
}

export function HeaderCard(props: HeaderCardProps) {
  return (
    <Container card>
      <Percent card={true} qnty={props.percent} />
      <TextContainer>
        <Title card>{props.title}</Title>
        <Date>{props.date}</Date>
      </TextContainer>
    </Container>
  );
}

export function HeaderDetailCard(props: HeaderCardProps) {
  return (
    <Container detailCard>
      <Title detailCard>{props.title}</Title>
      <Date detailCard>{props.date}</Date>
    </Container>
  );
}
