import { Toaster } from '@/components/ui/sonner'
import React from 'react'

const MainLayout = ({children}) => {
//if the user is already onboarded 
  return (
    <div className='container mx-auto mt-24 mb-20'>
      <Toaster/>
      {children}
    </div>
  )
}
export default MainLayout
