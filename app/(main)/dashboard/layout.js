import { Loader, Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const Layout = ({children}) => {
  return (
    <div className="px-5">
        <Suspense fallback={<div className='flex items-center justify-center'><Loader/></div>}>
        <div className='flex justify-center items-center mb-5'>
            <h1 className='text-6xl font-bold gradient-title'>
            Industry Insights
            </h1>
        </div>
      {children}
        </Suspense>
    </div>
  )
}

export default Layout
