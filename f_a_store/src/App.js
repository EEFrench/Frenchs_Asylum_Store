//import { useState, useEffect } from "react";
import './App.css';
import { getProducts } from './utils/store_utils';
//import Products from './components/Products';


function App() {
  getProducts();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
