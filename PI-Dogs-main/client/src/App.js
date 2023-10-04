import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './views/home/home';
import Init from './views/landing/landind';
import Detail from './views/detail/detail';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element={<Init/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
