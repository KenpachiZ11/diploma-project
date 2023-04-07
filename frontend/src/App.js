import React from 'react';
import { Layout } from './components/Layout/Layout';
import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About/About';
import { Contacts } from './pages/Contacts/Contacts';
import { Home } from './pages/Home/Home';
import { SinglePageCard } from './pages/SinglePageCard/SinglePageCard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/about/:id' element={<SinglePageCard/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;