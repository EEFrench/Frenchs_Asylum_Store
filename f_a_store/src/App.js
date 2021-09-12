import { useState, useEffect } from "react";
import './App.css';
import { getProducts } from './utils/store_utils';
import Products from './components/Products';
import ProductDetails from "./components/ProductDetails";
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
      <Products
      items ={items} // FIRST "items" IS A VARIABLE, 
      //SECOND {items} IS THE PROP
      />
    </div>
  );
  // render() {
  //   const { selectProduct } = this.state;


  // return (
  //     <div>
  //       {/* {this.state.isLoading && <p>Loading...</p>}
  //       <ProductList movies={this.state.movies} onMovieCardClicked={this.onMovieClicked} /> */}
  //       {/* <Paginator currentPage={this.state.page} getNextPage={() => this.updatePage(1)} getPrevPage={() => this.updatePage(-1)} /> */}
  //       {this.state.showModal &&
  //         <Modal show={this.state.showModal} onClose={() => this.updateShowModalState(false)}>
  //           <productDetails 
  //               image={selectProduct.Image}
  //               title={selectProduct.Title}
  //               price={selectProduct.Price}
  //               category={selectProduct.Category}
  //               //quantity={selectProduct.Plot}
  //               description={selectProduct.Description}
  //           />
  //         </Modal>
  //       }
  //     </div>
  //   )
  }
//}



export default App;