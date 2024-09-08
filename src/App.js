import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile/>}/>F
            </Routes>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
