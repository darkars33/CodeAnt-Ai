import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className='text-black'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
          </SignedOut>
    </div>
  )
}

export default Home
