import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Detail from './components/Detail'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/detail/:id" element={<Detail/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
