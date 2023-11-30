// import logo from './logo.svg';
import './App.css';
import Register from './Components/Authorized/Register';
import Home from './Components/Home/Home';
import Service from './Components/Authorized/Services/Hospitals/Service';
import Product from './Components/Hospital_info/product/Product';
import {BrowserRouter, Route, Routes}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login'  element={<Register/>} /> 
          <Route path='/home'  element={<Service/>} /> 
          <Route path='/hospital'  element={<Product/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
