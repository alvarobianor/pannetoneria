import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/background-toast.svg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: antiquewhite url(${backgroundImg}) no-repeat 70% 100px;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 16px Roboto, sans-serif;
}
button {
  cursor: pointer;
}
#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  /* background-color: green; */
}
`;
