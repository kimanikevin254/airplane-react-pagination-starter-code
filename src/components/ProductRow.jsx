export default function ProductRow({ product }){
    return (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>
            <img src={product.thumbnail} className="w-10 h-10 object-cover" />
            </td>
            <td>{product.title.length > 20 ? `${product.title.slice(0,20)}...` : product.title}</td>
            <td>{product.brand.length > 20 ? `${product.brand.slice(0,20)}...` : product.brand}</td>
            <td>{product.category}</td>
            <td>$ {product.price}</td>
            <td>{product.discountPercentage}%</td>
            <td>{product.rating}</td>
            <td>{product.stock}</td>
            <td>{product.description.length > 80 ? `${product.description.slice(0,80)}...` : product.description}</td>
        </tr>
    )
}