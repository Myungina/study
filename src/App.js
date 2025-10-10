import {BrowserRouter  as Router, Route, Routes}  from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Main from './layout/Main';
import Portfolio  from "./layout/Portfolio";
import './App.css';  

function App() {
  return (
    <Box className="App">      
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
