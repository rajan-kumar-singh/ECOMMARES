import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState} from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import Fashon from './Fashon';
import Cart from './Cart';
import Electrinics from './Electrinics';
import Mobiles from './Mobiles';
import Bastsel from './Bastsel';
import Fottar from './Fottar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path='/' element={<Product/>} />

          <Route path='/home' element={<Home />} />
          <Route path='/fashon' element={<Fashon />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/elec' element={<Electrinics/>}/>
          <Route path='/mobile' element={<Mobiles/>}/>
          <Route path='/bast' element={<Bastsel/>}/>

        </Routes>
      


      </BrowserRouter>
      <Fottar/>





    </div>
  );
}

export default App;
