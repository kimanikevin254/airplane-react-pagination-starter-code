import { BsFillGridFill } from 'react-icons/bs'

export default function Sidebar(){
    return (
        <aside className="shadow h-screen overflow-hidden p-4 space-y-4">
            <div>
                <h1 className="font-bold text-xl tracking-wide">Admin</h1>
                <p className="text-sm text-gray-500">dashboard</p>
            </div>

            <hr className="border-t border-gray-200" />

            <div className='flex items-center space-x-2'>
                <BsFillGridFill />
                <p>Products</p>
            </div>
        </aside>
    )
}