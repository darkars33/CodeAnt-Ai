import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom';
import { Colors } from '../Constant/Color';
import { useUser } from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/clerk-react';
import { Icons } from '../Constant/Icons';

const Navbar = () => {

          const [open, setOpen] = useState(false)

          const {user} = useUser();
          console.log(user.fullName)

          return (
                    <div className='p-3 w-[15rem] fixed h-screen md:h-auto md:w-[100%] flex flex-col md:flex-row md:items-center justify-between border z-50' style={{ backgroundColor: Colors.background }} >
                              <div className='flex flex-col gap-2  mt-2'>
                                        <div className='flex items-center gap-2'><img src={logo} alt="logo of CodeAnt AI" className='md:w-8 md:h-8' /> <h1 className='text-[1.5rem] md:text-xl'>CodeAnt AI</h1></div>
                                        <select name="" id="" className='p-2 w-[100%] border rounded-md focus:outline-none md:hidden '>
                                                  <option value="Name" >{user ? user.fullName : 'UtkarshDhairyaPanwar'}</option>      
                                        </select>
                                        <div className='flex flex-col gap-1 md:hidden'>
                                                  <NavLink to='/' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Repo className='w-5 h-5' /> Repositories
                                                  </NavLink>
                                                  <NavLink to='/code-review' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Code className='w-5 h-5' /> AI-Code Review
                                                  </NavLink>
                                                  <NavLink to='/security' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Cloud className='w-5 h-5' /> Cloud Security
                                                  </NavLink>
                                                  <NavLink to='/how-to-use' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Book className='w-5 h-5' /> How to Use
                                                  </NavLink>
                                                  <NavLink to='/setting' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Settings className='w-5 h-5' /> Setting
                                                  </NavLink>
                                        </div>
                              </div>
                              <div className='flex flex-col gap-1  mb-5 md:hidden'>
                                        <div className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <Icons.Phone className='w-5 h-5' /> Contact Us
                                        </div>
                                        <div className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <Icons.Logout className='w-5 h-5' /> <SignOutButton />
                                        </div>
                              </div>
                              <div className='hidden md:flex justify-center cursor-pointer' onClick={() => setOpen(!open)}>
                                        {!open ? <Icons.Menu className='w-6 h-6' /> : <Icons.Close className='w-6 h-6' />}
                              </div>
                              <div className={`absolute p-4 w-[100%] left-0 top-16 bg-[#fff] flex-col gap-1 hidden z-50 shadow-lg transition-all duration-100 ${open ? 'md:flex' : 'hidden'}`}>
                                        <select name="" id="" className='p-2 w-[100%] border rounded-md focus:outline-none'>
                                        <option value="Name">{user ? user.fullName : 'UtkarshDhairyaPanwar'}</option>
                                        </select>
                                        <div className='flex flex-col gap-1'>
                                                  <Link to='/' className='flex items-center gap-2 p-2  text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Repo className='w-5 h-5' /> Repositories
                                                  </Link>
                                                  <Link to='/code-review' className='flex items-center gap-2 p-2  text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Code className='w-5 h-5' /> AI-Code Review
                                                  </Link>
                                                  <Link to='/security' className='flex items-center gap-2 p-2 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Cloud className='w-5 h-5' /> Cloud Security
                                                  </Link>
                                                  <Link to='/how-to-use' className='flex items-center gap-2 p-2 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Book className='w-5 h-5' /> How to Use
                                                  </Link>
                                                  <Link to='/setting' className='flex items-center gap-2 p-2 text-md rounded-md hover:bg-gray-200'>
                                                            <Icons.Settings className='w-5 h-5' /> Setting
                                                  </Link>
                                                  <div className='flex items-center gap-2 p-2  text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <Icons.Phone className='w-5 h-5' /> Contact Us
                                        </div>
                                        <div className='flex items-center gap-2 p-2  text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <Icons.Logout className='w-5 h-5' /> Log Out
                                        </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Navbar
