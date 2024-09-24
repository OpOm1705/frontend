"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import Cookies from 'js-cookie';
const Navbar = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const authCookie = Cookies.get('is_auth')
    setIsAuth(authCookie)
  })
  return (
    <div className='bg-cyan-800'>
      {isAuth === null && <LoadingIndicator />}
      <nav className=" p-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white mr-4">Home</Link>
            {isAuth ?
              (
                <Link href="/user/profile" className="text-white mr-4">Profile</Link>
              ) :
              (
                <>
                  <Link href="/account/login" className="text-white mr-4">Login</Link>
                  <Link href="/account/register" className="text-white mr-4">Registration</Link>
                </>
              )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar