import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const Layout = ({children}) => {
  return (
    <div className="px-5">
       
        <Suspense fallback={<div><BarLoader/></div>}>
      {children}
        </Suspense>
    </div>
  )
}

export default Layout