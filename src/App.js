import "./App.css"
import img from "./books.webp";
function App() {
  return (
    <div className="App">
      <h1>The Book Shop</h1>
      <p>Where you forget the world</p>
      <img className="Img" src={img}></img>
    </div>
  );
}

export default App;
