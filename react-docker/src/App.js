import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getProducts(){
      try {
        const {data} = await axios.get(`http://localhost:4000/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React.js</p>
        <ul>
          {products.map((product) => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
