import Sidebar from './Sidebar'
import Topnav from './Topnav'

export default function Layout({children}){
    return(
        <div className='flex bg-white'>
            <Sidebar />
            <div className='flex-1 h-screen overflow-hidden'>
                <Topnav />
                <div className='p-4 h-full overflow-y-scroll'>
                    {children}
                </div>
            </div>
        </div>
    )
}