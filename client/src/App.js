import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Dogs from "./components/dogs/dogs";
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";


const pageItems = 8;

function App() {

  const [dogs, setDogs] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  console.log(items);

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

  useEffect(() => {
    if (dogs.length > 0) {
      setItems([...dogs].splice(0, pageItems))
    }
  },[dogs, pageItems]);



  const nextHandler = () => {
    const totalElement = dogs.length;
    const nextPage = currentPage + 1;

    const firstIndex = nextPage * pageItems

    if (firstIndex > totalElement) return

    setItems([...dogs].splice(firstIndex, pageItems))
    setCurrentPage(nextPage);

    console.log("es next")
  }


  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return
    const firstIndex = prevPage * pageItems
    setItems([...dogs].splice(firstIndex, pageItems))
    setCurrentPage(prevPage);





    console.log("es prev")
  }





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
        <Route path="/dogs" element={<Dogs dogs={items} currentPage={currentPage} nextHandler={nextHandler} prevHandler={prevHandler} ></Dogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
