import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Mesas from './pages/Mesas';
import Mesa from './pages/Mesa'
import { ThemeProvider } from './contexts/ThemeContext';
import { MesaProvider } from './contexts/MesaContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "mesas",
    element: <Mesas />
  },
  {
    path: "mesa",
    element: <Mesa />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MesaProvider>
    <ThemeProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  </MesaProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
