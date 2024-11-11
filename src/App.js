import "./App.css"
import img from "./books.webp";
import b1 from "./islamic.jpg";
import b2 from "./arabic.jpg";
function App() {
  const products = [
    {
      name: "islamic",
      price: "18 KD",
    },
    {
      name: "learn Arabic",
      price: "7 KD",
    }
  ];
  return (
    <div className="App">
      <h1>The Book Shop</h1>
      <p>Where you forget the world</p>
      <img className="Img" src={img}></img>

      <div className="Products">
      <div>
        <img className="Imgs" src={b1}></img>
        <h3>{products[0].name}</h3>
        <p>{products[0].price}</p>
      </div>

      <div>
        <img className="Imgs" src={b2}></img>
        <h3>{products[1].name}</h3>
        <p>{products[1].price}</p>
      </div>
      </div>

    </div>
  );
}

export default App;


