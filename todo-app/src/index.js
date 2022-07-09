import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

import App from './components/App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
