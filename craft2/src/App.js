import { useState, useEffect } from "react";
import ProductsList from "./components/ProductList";
import { getProducts } from "./services/products";
import './App.css';
import { SearchInput } from "./components/SearchInput";

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const productFetch = await getProducts()
      setProducts(productFetch)
      
    } catch (error) {
      console.error("Error fetching products")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const editRow = (product) => {
    console.log(product)
  }

  const deleteProduct = (id) => {
    console.log(id)
  }

  const addProduct = () => {
    console.log("going to add product")
  }

  const handleSearch = (searchTerm) => {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()))

      console.log("Products found", filteredProducts)
  }

  return (
    <div className="App">
      <SearchInput onSearch={handleSearch}/>
      <ProductsList products={products} deleteProduct={deleteProduct} editRow={editRow}/>

      <div>
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default App;
