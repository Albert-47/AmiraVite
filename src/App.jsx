import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingScreen from './routes/LandingScreen';
import Category from './routes/Category';
import NavBar from './ui/NavBar';


const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<LandingScreen />} />
      <Route path='/Categories/:category' element={<Category />} />
    </Routes>
  </>
  

);

export default App;