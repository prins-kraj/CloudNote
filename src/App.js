import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Contact from './components/Contact';

const AppContainer = ()=>{
  const location = useLocation();
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  };

  const isContactOrAboutSection = location.pathname === "/contact" || location.pathname === "/about";

  return (
    <>
      {/* <NoteState> */}
        {/* <Router> */}
          <Navbar/>
          {isContactOrAboutSection ? null : <Alert alert={alert} />}
          <div>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
            </Routes>
          </div>
        {/* </Router> */}
      {/* </NoteState> */}
    </>
  );
}

function App() {
  return (
    <NoteState>
      <Router>
        <AppContainer />
      </Router>
    </NoteState>
  );
}

export default App;
