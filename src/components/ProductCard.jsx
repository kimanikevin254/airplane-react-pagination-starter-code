import { AiFillStar } from 'react-icons/ai'

export default function ProductCard({ product }){
    return (
        <div className="border shadow w-80">
            <img src={product.thumbnail} className="w-80 h-96 object-cover" />
            <div className="p-2">
                <div className='space-y-2'>
                    <div className='flex gap-2'>
                        <p className="text-sm">{product.title.length > 20 ? `${product.title.slice(0,20)}...` : product.title}</p>
                        •
                        <p className='text-gray-500 text-sm'>{product.brand.length > 15 ? `${product.brand.slice(0,15)}...` : product.brand}</p>
                    </div>
                    <p className="font-bold">$ {product.price}</p>
                    <p className='flex items-center gap-1'><AiFillStar /> {product.rating}</p>
                    <p>In stock: {product.stock}</p>
                    <p>Discount: {`${product.discountPercentage}%`}</p>
                    <p>Category: {product.category}</p>
                    <div>
                        <h2 className='font-semibold text-lg'>Description</h2>
                        <p className='text-sm text-gray-500'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}