import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={true?<HomePage/>:<Authentication/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
