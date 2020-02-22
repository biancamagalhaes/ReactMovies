import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #116193;
  margin-bottom: 5vh;
  height: 25%;

  ${props =>
    props.card
      ? "justify-content: left; padding-left: 2vw; min-height:97px; max-width: 97.5%; margin-bottom: 2vh; width: 97%;"
      : null}
  ${props =>
    props.detailCard
      ? "justify-content: space-between; fled-direction: row; background-color: #e6e6e6; padding: 1vh 0; align-items: center; margin-bottom: 0;"
      : null}

    @media (max-width: 823px) {
    margin-bottom: 3vh;

    ${props =>
      props.card ? "height: 8%; min-height: 57px; width: 100%;" : null}
  }

 
}
`;

export const TextContainer = styled.div`
  padding-left: 7em;
  margin-top: 4vh;
  position: absolute;
  flex-direction: column;

  @supports (-ms-ime-align: auto) {
    margin-top: 60px;
  }

  @media (max-width: 823px) {
    padding-left: 5em;
    margin-top: 2.7vh;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  font-family: "Abel", sans-serif;
  color: #01e2e0;
  font-weight: 100;
  text-align: center;

  @media (max-width: 823px) {
    font-size: 2em;
  }

  ${props =>
    props.detailCard
      ? "    margin-top: 0; padding-left: 2vw; color: #116193; font-size: 3em; font-weight: 500;margin-top: 0; margin-bottom: 0;"
      : null}

  ${props => (props.card ? "margin-bottom: 0" : null)}
`;

export const Date = styled.h2`
  font-size: 1.5em;
  font-family: "Abel", sans-serif;
  color: #bcbcbc;
  font-weight: 100;
  margin-top: 0;

  ${props =>
    props.detailCard
      ? "    margin-right: 2vw; color: #9e9c9c;margin-top: 0; margin-bottom: 0;"
      : null}
`;
