import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  tomato: "hsl(4, 100%, 67%)",
  darkSlateGrey: "hsl(234, 29%, 20%)",
  charcoalGrey: "hsl(235, 18%, 26%)",
  grey: "hsl(231, 7%, 60%)",
  white: "hsl(0, 0%, 100%)"
}

const fonts = {
  body: "Roboto",
  heading: "Roboto"
}

const theme = extendTheme({ colors, fonts })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
