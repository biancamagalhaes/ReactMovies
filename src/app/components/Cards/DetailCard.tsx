import React from "react";
import {
  Container,
  Image,
  SecondContainer,
  Subtitle,
  ButtonContainer,
  ThirdContainer,
  InformationContainer,
  Title
} from "./style";
import { HeaderDetailCard } from "../Header/Header";
import ButtonCategorie from "../ButtonCategories/Button";
import { Percent } from "../Circle/Circle";

interface SimpleCardProps {
  image: string;
  title: string;
  percent: number;
  date: string;
  description: string;
  situation: string;
  duration: string;
  language: string;
  budget: string;
  revenue: string;
  gain: string;
  categories: Array<string>;
}

export default function DetailCard(props: SimpleCardProps) {
  const alignInformations = [
    { Situação: props.situation },
    { Duração: props.duration },
    { Idioma: props.language },
    { Orçamento: props.budget },
    { Receita: props.revenue },
    { Lucro: props.gain }
  ];

  return (
    <Container detailCard>
      <HeaderDetailCard title={props.title} date={props.date} />
      <SecondContainer detailCard>
        <ThirdContainer>
          <Title>Sinopse</Title>
          <Subtitle detailCard> {props.description}</Subtitle>
          <Title>Informações</Title>
          <InformationContainer detailCard>
            {alignInformations.map(element => (
              <div style={{ paddingRight: "2vw" }}>
                <Title information>{Object.keys(element)[0]}</Title>
                <Subtitle information>{Object.values(element)[0]}</Subtitle>
              </div>
            ))}
          </InformationContainer>
          <ButtonContainer detailCard>
            {props.categories.map((element: any, indx) => (
              <ButtonCategorie title={element} key={indx} />
            ))}
          </ButtonContainer>
          <div
            style={{
              marginTop: -57,
              marginLeft: -25,
              marginBottom: 15,
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <Percent card={false} qnty={props.percent} />
          </div>
        </ThirdContainer>
        <Image src={props.image} detailCard />
      </SecondContainer>
    </Container>
  );
}
