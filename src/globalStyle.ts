import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: rgb(11, 9, 17);
  }
`;

export const px2vw = (size: number, width = 1440) =>
  `${(size / width) * 100}vw`;
