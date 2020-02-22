import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  margin: 2vh 0;

  ${props =>
    props.detailCard
      ? "flex-direction: column; background-color: #f2f2f2; width: 100%;"
      : null}

  @media (max-width: 823px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 2vw;
  padding-bottom: 3vw;
  overflow-wrap: break-word;

  ${props => (props.detailCard ? "margin: 5vh 1vw;" : null)}

  @media (max-width: 823px) {
    padding-left: 1vw;

    ${props =>
      props.detailCard
        ? "flex-direction: column; align-items: center; display: flex;"
        : null}
  }
`;

export const Image = styled.img`
  display: flex;
  width: 18em;
  flex: 1;

  ${props => (props.detailCard ? "flex: 1.5; width: 25em;" : null)}

  @media (max-width: 1024px) {
    ${props => (props.detailCard ? "width: 20em;" : null)}
  }

  @media (max-width: 823px) {
    width: 98.1%;
    ${props =>
      props.detailCard ? "flex-direction: column-reverse; width: 100%" : null}
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  background-color: #ebebeb;

  ${props =>
    props.detailCard ? "flex-direction: row; background-color: #f2f2f2;" : null}

  @media (max-width: 823px) {
    width: 98.5%;

    ${props => (props.detailCard ? "flex-direction: column-reverse;" : null)}
  }
`;

export const Subtitle = styled.p`
  padding: 2vw 3vw;
  font-family: Lato;
  color: #9a9a9a;
  font-size: 20px;

  ${props => (props.detailCard ? "padding: 0 2vw" : null)}
  ${props => (props.information ? "    padding: 0;" : null)}
`;

export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const Title = styled.h1`
  color: #116193;
  font-family: Abel;
  width: 92%;
  margin: 2vh 2vw 1vh;
  padding-bottom: 1vh;
  font-size: 2em;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #01e2e0;
  font-weight: 300;

  ${props =>
    props.information
      ? "border-bottom-style: none; font-size: 1.5em; margin: 0; padding-bottom: 0;"
      : null}
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2vw;
  margin-top: 2vh;

  @media (max-width: 823px) {
    ${props =>
      props.detailCard ? "flex-direction: column; text-align: center" : null}
  }
`;
