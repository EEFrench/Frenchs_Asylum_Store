import { useState, useEffect } from "react";
import './App.css';
import { getProducts } from './utils/store_utils';
import Products from './components/Products';
import ProductDetails from "./components/ProductDetails";
import SideBar from "./components/SideBar";
//import NavBar from "./components/NavBar"; //NavBar.js
//import Modal from "./components/Modal";


function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setItems(data)); //INVOKES getProducts 
    //FUNCTION, STORE THE DATA INSIDE setItems. THE ".then" IS A 
    //SUBSTITUTE FOR ASYNC & AWAIT
  },[]
  )
  return (
    <div className="App">
      {/* <NavBar /> */}
      <SideBar/>
      <Products
      items ={items} // FIRST "items" IS A VARIABLE, 
      //SECOND {items} IS THE PROP
      />
      
    </div>
  );
}

export default App;