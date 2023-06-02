import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { darkMode } from "./redux/actions";
import style from "./app.module.css"
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Dogs from "./components/dogs/dogs";
import Detail from './components/detail/Detail';
import FormCreate from './components/formCreate/FormCreate';
import Error from './components/error/Error';

function App() {

  const dispatch = useDispatch();
  const modoOscuro = useSelector(state => state.darkMode);
  const handleButtonClick = () => {
    dispatch(darkMode());
  }
  return (
    <>
      <div className={`${style.app} ${modoOscuro ? style.darkmode : style.lightmode}`}>
        <Nav color={handleButtonClick}></Nav>
        <Routes>
          <Route path="/pi_dogs_henry" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/dogs" element={<Dogs ></Dogs>}></Route>
          <Route path="/dogs/:id" element={<Detail />} ></Route>
          <Route path="/dogs/create" element={<FormCreate />}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
