import "./App.css"
import img from "./books.webp";
import { ProductItem } from "./Components/ProductItem";
import products from "./data/products";
function App() {
  
  const productList = products.map((product, index)=> {
    return(
      <ProductItem product={product}/>
    )}
  )
  return (
    <div className="App">
      <h1>The Book Shop</h1>
      <p>Where you forget the world</p>
      <img className="Img" src={img}></img>
      <div className="Products">
      {productList}
      </div>
      
    </div>
  );
}

export default App;


