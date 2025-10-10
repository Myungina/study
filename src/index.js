import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
//import { system } from "@chakra-ui/react/preset";
import {theme} from "./Theme/Theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ChakraProvider  value={theme}  >
    <App />
    </ChakraProvider>
  </React.StrictMode>  
);
