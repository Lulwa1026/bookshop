import "./App.css"
import img from "./books.webp";
import b1 from "./islamic.jpg";
import b2 from "./arabic.jpg";
import { ProductItem } from "./Components/ProductItem";
function App() {
  const products = [
    {
      name: "islamic",
      price: "17 KD",
      img: b1,
    },
    {
      name: "learn Arabic",
      price: "7 KD",
      img: b2,
    }
  ];
  const productsList = products.map((product, index)=> {
    return(
      <ProductItem />
    )}
  )
  return (
    <div className="App">
      <h1>The Book Shop</h1>
      <p>Where you forget the world</p>
      <img className="Img" src={img}></img>
      <div className="Products">
      {productsList}
      </div>
      
    </div>
  );
}

export default App;


