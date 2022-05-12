import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Home from './components/Home';
import  './components/Home.css';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} >
      </Route>
    </Routes>
    </>
);
}

export default App;
