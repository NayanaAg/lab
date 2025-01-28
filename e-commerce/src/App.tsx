import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard';
import Navigation from './components/Navigation';
import Searchbar from './components/Searchbar';


function App() {
  const [cart, setCart] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const handleSearch = (searchTerm: string) => {
    setSearchQuery(searchTerm);
  }


  const products = [
    {
      id: 1,
      title: "testing",
      price: 20,
      image: "https://media.istockphoto.com/id/1307609675/photo/bluebird.jpg?s=612x612&w=0&k=20&c=PdSeFBXLNi2n8vNxDjubRQOsaOw_sJ1w7RhtxjGL5GM="
    },
    {
      id: 2,
      title: "test2",
      price: 21,
      image: "https://media.istockphoto.com/id/1307609675/photo/bluebird.jpg?s=612x612&w=0&k=20&c=PdSeFBXLNi2n8vNxDjubRQOsaOw_sJ1w7RhtxjGL5GM="
    },
    {
      id: 3,
      title: "test3",
      price: 22,
      image: "https://media.istockphoto.com/id/1307609675/photo/bluebird.jpg?s=612x612&w=0&k=20&c=PdSeFBXLNi2n8vNxDjubRQOsaOw_sJ1w7RhtxjGL5GM="
    }
  ]

  return (
    <>
      <Navigation cartCount={cart.length} />
      <Searchbar onSearch={handleSearch} />

      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}
            addToCart={addToCart} />
        ))}
      </div>
    </>
  )
}

export default App
