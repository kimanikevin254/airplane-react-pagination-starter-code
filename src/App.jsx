import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import ProductRow from "./components/ProductRow"

export default function App(){
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(({ products }) => {
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
        <table className="">
          <thead>
            <tr>
              <td>ID</td>
              <td>Thumbnail</td>
              <td>Title</td>
              <td>Brand</td>
              <td>Category</td>
              <td>Price</td>
              <td>Discount</td>
              <td>Rating</td>
              <td>In stock</td>
              <td>Description</td>
            </tr>
          </thead>

          <tbody>
            {
              products.length > 0 && products.map(product => (
                <ProductRow product={product} />
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  )
}