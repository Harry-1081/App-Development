import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <States>
          <Routes>
            
            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/home"
              element={<Home />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

          </Routes>
        </States>
      </BrowserRouter>
    </>
  );
}

export default App;
