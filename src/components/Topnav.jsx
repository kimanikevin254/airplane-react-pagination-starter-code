import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'

export default function Topnav(){
    return(
        <div className="shadow px-4 py-6 flex justify-end space-x-3">
            <AiOutlineBell size={30} />
            <BiUserCircle size={30} />           
        </div>
    )
}