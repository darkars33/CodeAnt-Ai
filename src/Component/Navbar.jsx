import React from 'react'
import logo from '../assets/logo.svg'
import { AiOutlineHome } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { IoMdCloudOutline } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { Colors } from '../Constant/Color';

const Navbar = () => {
          return (
                    <div className='p-3 max-w-[15rem] fixed h-screen flex flex-col justify-between border' style={{backgroundColor: Colors.background}} >
                              <div className='flex flex-col gap-2  mt-2'>
                                        <div className='flex items-center gap-2'><img src={logo} alt="logo of CodeAnt AI" /> <h1 className='text-[1.5rem]'>CodeAnt AI</h1></div>
                                        <select name="" id="" className='p-2 w-[100%] border rounded-md focus:outline-none'>
                                                  <option value="Name">Darshan</option>
                                                  <option value="Name">Namevsfdfvdvfvsdfdsdfdsfdsffsdfsds</option>
                                        </select>
                                        <div className='flex flex-col gap-1'>
                                                  <NavLink to='/' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <AiOutlineHome className='w-5 h-5' /> Repositories
                                                  </NavLink>
                                                  <NavLink to='/code-review' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <FiCode className='w-5 h-5' /> AI-Code Review
                                                  </NavLink>
                                                  <NavLink to='/security' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <IoMdCloudOutline className='w-5 h-5' /> Cloud Security
                                                  </NavLink>
                                                  <NavLink to='/how-to-use' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <FiBook className='w-5 h-5' /> How to Use
                                                  </NavLink>
                                                  <NavLink to='/setting' className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200'>
                                                            <IoSettingsOutline className='w-5 h-5' /> Setting
                                                  </NavLink>
                                        </div>
                              </div>
                              <div  className='flex flex-col gap-1  mb-5'>
                                        <div className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <LuPhone className='w-5 h-5' /> Contact Us
                                        </div>
                                        <div className='flex items-center gap-2 p-2 px-4 text-md rounded-md hover:bg-gray-200 cursor-pointer'>
                                                  <IoIosLogOut className='w-5 h-5' /> Log Out
                                        </div>
                              </div>
                    </div>
          )
}

export default Navbar
