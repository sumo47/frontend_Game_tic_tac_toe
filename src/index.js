import React from 'react';
import { createRoot } from 'react-dom/client';
import Board from './Components/Board'
import Nav from './Components/Nav'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <Nav />
    <Board />
  </>
);
