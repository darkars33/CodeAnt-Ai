import React from 'react';
import Subtract from '../assets/Subtract.svg';
import Signlogin from '../assets/Sign-login.svg';
import logo from '../assets/logo.svg';
import { Colors } from '../Constant/Color';
import { SignedOut, SignInButton} from "@clerk/clerk-react";
import { Icons } from '../Constant/Icons';
import { useNavigate } from 'react-router-dom';

const Saas = () => {

  const navigate = useNavigate()

  return (
    <div className="flex max-w-screen-2xl mx-auto">
      <div className="w-1/2 h-screen relative p-5 flex justify-center shadow-lg md:hidden md:w-0">
        <img src={Signlogin} alt="" className="w-[60%]" />
        <img src={Subtract} alt="" className="absolute bottom-0 left-0 w-[30%]" />
      </div>

      <div
        className="w-1/2 h-screen p-5 flex flex-col justify-center gap-5 md:w-full"
        style={{ backgroundColor: Colors.background2 }}
      >
        <div className='border rounded-md border-gray-200 flex flex-col justify-center items-center gap-5' style={{ backgroundColor: Colors.background }}>
          <div className='w-[100%] p-5 flex flex-col justify-center items-center gap-5'>
            <div className='flex gap-2 items-center'><img src={logo} alt="" /><h1 className='text-2xl'>CodeAnt Ai</h1></div>
            <h1 className='text-[2rem] font-bold md:text-[1.5rem] text-center'>Welcome to CodeAnt AI</h1>
            <div className='w-[100%] flex border rounded-md border-gray-200' style={{ backgroundColor: Colors.background2 }}>
              <button className='w-1/2 py-2 rounded-md text-white text-[1.3rem]  md:text-[1rem]' style={{ backgroundColor: Colors.button }} >SAAS</button>
              <button className='w-1/2 py-2 rounded-md  text-[1.3rem] md:text-[1rem]' style={{ color: Colors.text2 }} onClick={() => navigate('/self-hosted')} >Self Hosted</button>
            </div>
          </div>
          <hr className='w-[100%]' />
          <div className='w-[100%] pt-2 pb-5 flex flex-col justify-center items-center gap-5'>
            <div className='w-[50%] lg:w-[60%] md:w-[90%] md:text-sm p-3 border rounded-md border-gray-200 flex justify-center items-center gap-2 hover:bg-gray-100 cursor-pointer'>
              <Icons.Github className='w-5 h-5' /> <h1 className='font-normal'><SignedOut>
                                                                      <SignInButton />  with GitHub
                                                            </SignedOut> </h1>
            </div>
            <div className='w-[50%] lg:w-[60%] md:w-[90%]  md:text-sm p-3 border rounded-md border-gray-200 flex justify-center gap-2 hover:bg-gray-100 cursor-pointer'>
              <Icons.Bitbucket className='w-5 h-5 text-blue-500' />  <h1 className='font-normal'><SignedOut>
                                                                      <SignInButton />
                                                            </SignedOut> with Bitbucket</h1>
            </div>
            <div className='w-[50%] lg:w-[60%] md:w-[90%] md:text-sm p-3 border rounded-md border-gray-200 flex justify-center gap-2 hover:bg-gray-100 cursor-pointer'>
              <Icons.DevOps className='w-5 h-5 text-blue-700' />  <h1 className='font-normal'><SignedOut>
                                                                      <SignInButton />
                                                            </SignedOut> with Azure Devops</h1>
            </div>
            <div className='w-[50%] lg:w-[60%] md:w-[90%] md:text-sm p-3 border rounded-md border-gray-200 flex justify-center gap-2 hover:bg-gray-100 cursor-pointer'>
              <Icons.Gitlab className='w-5 h-5 text-orange-600' />  <h1 className='font-normal'><SignedOut>
                                                                      <SignInButton />  
                                                            </SignedOut> with GitLab</h1>
            </div>

          </div>
        </div>
        <h1 className='text-center md:text-sm'>By signing up you agree to the <span className='font-semibold'>Privacy Policy</span>.</h1>
      </div>
    </div>
  );
};

export default Saas;
