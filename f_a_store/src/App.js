import { useState, useEffect } from "react";
import './App.css';
import { getProducts } from './utils/store_utils';
import Products from './components/Products';
import ProductDetails from "./components/ProductDetails";
//import './components/Modal'


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setItems(data)); //INVOKES getProducts 
    //FUNCTION, STORE THE DATA INSIDE setItems. THE ".then" IS A 
    //SUBSTITUTE FOR ASYNC & AWAIT
  },[]
  )
  render() {
    const { selectProduct } = this.state;

    return (
      <div className="App">
        <Products
        items ={items} // FIRST "items" IS A VARIABLE, 
        //SECOND {items} IS THE PROP
        />
        <Modal show={this.state.showModal} onClose={() => this.updateShowModalState(false)}>
              <MProductDetails 
                image={selectProduct.Image}
                title={selectProduct.Title}
                price={selectProduct.Price}
                category={selectProduct.Category}
                //quantity={selectProduct.Plot}
                description={selectProduct.Description}
              />
            </Modal>

      </div>
    }
  }





export default App;
