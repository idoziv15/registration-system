import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Theme to match Figma colors and fonts
const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      primary: '#4B49AC',
      hover: '#2F2D7E',
      disabled: '#B6B6D3',
      grayText: '#6D6D6D',
      lightBg: '#F3F4F6',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
  </React.StrictMode>,
  document.getElementById("root")
);
