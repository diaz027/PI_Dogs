import './App.css';
import { Routes, Route} from 'react-router-dom'
import Init from './views/landing/landind';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import NavBar from './components/navBar/navBar';
import Form from './views/form/form';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element={<Init/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
