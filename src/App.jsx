import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import ProductRow from "./components/ProductRow"

export default function App(){
  const [products, setProducts] = useState([])
  
  // new states will go here 

  // calculateProductsToDisplay function will go here

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
      <div className='mb-8 flex items-center gap-12'>
        <h1 className="text-3xl font-bold">Products</h1>

        {/* "products per page" dropdown will go here */}

        {/* next and previous buttons will go here */}
      </div>
      
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

        {/* page numbers will go here */}

      </div>
    </Layout>
  )
}