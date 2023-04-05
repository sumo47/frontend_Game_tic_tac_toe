import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './Components/LoginPage'
import Game from './Components/Game'
import Home from './Components/Home'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/Game' element={<Game/>}/>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
