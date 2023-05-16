import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Dogs from "./components/dogs/dogs";
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [dogs, setDogs] = useState([]);

  const allDogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/dogs")
      if (data) return setDogs(data);
    } catch (error) {
      window.alert(error.message);
    }
  }

  useEffect(() => {
    allDogs();
  }, [])

  const location = useLocation();

  const { pathname } = location;

  const checkHome = () => {
    if (pathname === "/home") {
      return false;
    }
    return true;
  };



  return (
    <div className='App'>
      <Nav checkHome={checkHome()} ></Nav>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/dogs" element={<Dogs dogs={dogs}></Dogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
