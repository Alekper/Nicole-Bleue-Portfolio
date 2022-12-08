import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import MainPage from './Components/Main Page/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
