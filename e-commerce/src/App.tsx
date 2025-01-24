import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard';
import Navigation from './components/Navigation';

function App() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const products = [
    {
      id: 1,
      title: "testing",
      price: 20,
      image: "https://th.bing.com/th/id/R.4563107324febdb7bb503b95b33e6b3a?rik=TwScornqpiitbQ&riu=http%3a%2f%2fanimalstime.com%2fwp-content%2fuploads%2f2016%2f02%2feastern-bluebird-2.jpg&ehk=gIxIlqwk9FF62%2bO91nedC0kVTkZM5kjIhcaLrPja%2bdw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 2,
      title: "test2",
      price: 21,
      image: "https://th.bing.com/th/id/R.4563107324febdb7bb503b95b33e6b3a?rik=TwScornqpiitbQ&riu=http%3a%2f%2fanimalstime.com%2fwp-content%2fuploads%2f2016%2f02%2feastern-bluebird-2.jpg&ehk=gIxIlqwk9FF62%2bO91nedC0kVTkZM5kjIhcaLrPja%2bdw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 3,
      title: "test3",
      price: 22,
      image: "https://th.bing.com/th/id/R.4563107324febdb7bb503b95b33e6b3a?rik=TwScornqpiitbQ&riu=http%3a%2f%2fanimalstime.com%2fwp-content%2fuploads%2f2016%2f02%2feastern-bluebird-2.jpg&ehk=gIxIlqwk9FF62%2bO91nedC0kVTkZM5kjIhcaLrPja%2bdw%3d&risl=&pid=ImgRaw&r=0"
    }
  ]

  return (
    <>
      <Navigation cartCount={cart.length} />

      {products.map(product => (
        <ProductCard key={product.id} product={product}
          addToCart={addToCart} />
      ))}
    </>
  )
}

export default App
