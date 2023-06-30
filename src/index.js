import React from 'react';
import { createRoot } from 'react-dom/client';
import Board from './Components/Board'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <Board/>
  </>
);
