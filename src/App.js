import {BrowserRouter  as Router, Route, Routes}  from "react-router-dom";
import react , {useEffect} from "react";
import './App.css';
import Main from './component/Main';
import Portfolio  from "./component/Portfolio";
import Etc  from "./component/Etc";

function App() {
  return (

    <div className="App">      
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Etc" element={<Etc />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
