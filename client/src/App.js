import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Dogs from "./components/dogs/dogs";
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/Detail';
// import { useEffect, useState } from "react";

function App() {

  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dogs" element={<Dogs ></Dogs>}></Route>
        <Route path="/dogs/:id" element={<Detail />} ></Route>
        <Route path='*' element={
          <Home></Home>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
