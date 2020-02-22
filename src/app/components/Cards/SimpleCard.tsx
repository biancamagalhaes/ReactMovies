import React from "react";
import {
  Container,
  Image,
  SecondContainer,
  Subtitle,
  ButtonContainer
} from "./style";
import { HeaderCard } from "../Header/Header";
import ButtonCategorie from "../ButtonCategories/Button";

interface SimpleCardProps {
  image: string;
  title: string;
  percent: number;
  date: string;
  description: string;
  categories: Array<string>;
}

export function SimpleCard(props: SimpleCardProps) {
  return (
    <Container>
      <Image src={props.image} />
      <SecondContainer>
        <HeaderCard
          percent={props.percent}
          title={props.title}
          date={props.date}
        />
        <Subtitle>{props.description}</Subtitle>
        <ButtonContainer>
          {props.categories.map((element: any, indx) => (
            <ButtonCategorie title={element} key={indx} />
          ))}
        </ButtonContainer>
      </SecondContainer>
    </Container>
  );
}
