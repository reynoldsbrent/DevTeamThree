import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  );
}

export default App;
