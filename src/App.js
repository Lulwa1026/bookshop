import "./App.css"
import img from "./books.webp";
import b1 from "./islamic.jpg";
import b2 from "./arabic.jpg";
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
      <div key={index}>
        <div>
      <div>
        <img className="Imgs" src={product.img}></img>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      </div>
      </div>
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


