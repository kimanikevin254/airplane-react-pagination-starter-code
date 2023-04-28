import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import ProductCard from "./components/ProductCard"

export default function App(){
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(({ products }) => {
      console.log(products)
      setProducts(products)
    })
  }

  useEffect(() => {
    fetchProducts()
  },[])
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="flex flex-wrap gap-6 mb-32">
        {
          products.length > 0 && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </Layout>
  )
}