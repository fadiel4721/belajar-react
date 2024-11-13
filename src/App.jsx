import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';



import viteLogo from '/vite.svg';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import Completed from './components/Completed';

import TodoList from './components/Todolist';


function Navbar() {
  const location = useLocation();

  // Navbar tidak akan ditampilkan di halaman login, todo-list, shopping-cart, dan completed
  if (
    location.pathname === '/login' ||
    location.pathname === '/todo-list' ||
    location.pathname === '/shopping-cart' ||
    location.pathname === '/completed'
  ) {
    return null;
  }

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Hanya tampil di rute utama */}
        <Route path="/login" element={<Login />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>

      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </Router>
  );
}

export default App;