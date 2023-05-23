import style from "./app.module.css"
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Dogs from "./components/dogs/dogs";
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/Detail';
import FormCreate from './components/formCreate/FormCreate';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkMode } from "./redux/actions";
// import { useEffect, useState } from "react";

function App() {

  const dispatch = useDispatch();
  const modoOscuro = useSelector(state => state.darkMode);
  const handleButtonClick = () => {
    dispatch(darkMode());
  }
  return (
    <div className={`${style.app} ${modoOscuro ? style.darkmode : style.lightmode}`}>
      <Nav color={handleButtonClick }></Nav>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dogs" element={<Dogs ></Dogs>}></Route>
        <Route path="/dogs/:id" element={<Detail />} ></Route>
        <Route path="/dogs/create" element={<FormCreate />}></Route>
        <Route path='*' element={
          <Home></Home>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
