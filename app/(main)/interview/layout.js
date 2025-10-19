import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const Layout = ({children}) => {
  return (
    <div className="px-5 h-[90vh]">
        <Suspense fallback={<div className='flex justify-center items-center'><Loader/></div>}>
      {children}
        </Suspense>
    </div>
  )
}

export default Layout