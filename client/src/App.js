import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  const { pathname } = location;

  const checkHome = () => {
    if (pathname === "/") {
      return false;
    }
    return true;
  };

  return (
    <div className='App'>
      <Nav checkHome={checkHome()} ></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
