import { SignedOut, SignInButton, SignUpButton  , SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
const Header = () => {
  return (

        <>
        <SignedOut>
              <SignInButton />
              <SignUpButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </>
  )
}

export default Header
