import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
  font-family: 'Abel';
  font-style: normal;
  font-weight: normal;
  src: local('Abel'), url('Abel-Regular.tff') format('tff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: normal;
  src: local('Lato'), url('Lato-Regular.tff') format('tff');
}
`;
