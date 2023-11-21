import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import './App.css';
import Main from './component/Main';
import  Profile  from "./component/Profile";
import  Portfolio  from "./component/Portfolio";
import  Etc  from "./component/Etc";

function App() {
  
  return (

    <div className="App">      
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Etc" element={<Etc />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
