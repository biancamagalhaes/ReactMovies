import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  background-color: #ebebeb;
  font-size: 25px;
  border: none;
  padding: 15px;
  padding-left: 30px;
  text-align: left;
  border-radius: 30px;
  margin-bottom: 3vh;
  color: #116193;
  font-family: "Abel", sans-serif;
  font-weight: 100;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #116193;
    font-family: "Abel", sans-serif;
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: #116193;
    font-family: "Abel", sans-serif;
    font-weight: 100;
  }

  @media (max-width: 823px) {
    width: 80%;
    font-size: 15px;
  }
`;
