import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border-color: #116193;
  border-width: 4px;
  border-style: solid;
  justify-content: center;
  background-color: #01e2e0;
  align-items: center;

  @media (max-width: 823px) {
    width: 70px;
    height: 70px;
  }

  @supports (-ms-ime-align: auto) {
    ${props => (props.card ? "margin-top: 60px" : null)}
  }

  ${props => (props.card ? "position: absolute; margin-top: 2vh" : null)}

  ${props =>
    props.pagination ? "width: 70px; height: 70px; margin: 0px 10px;" : null}
`;

export const Text = styled.h1`
  font-size: 40px;
  border: none;
  color: #01e2e0;
  background-color: #116193;
  text-align: center;
  align-items: center;
  width: 100px;
  justify-content: center;
  font-weight: 100;
  height: 90px;
  display: flex;
  border-radius: 50%;
  margin: 0.4vh;
  font-family: "Lato";

  @media (max-width: 823px) {
    font-size: 30px;
    width: 61px;
    height: 62px;
  }

  ${props =>
    props.pagination ? "width: 80px; height: 65px; font-size: 35px;" : null}
`;
