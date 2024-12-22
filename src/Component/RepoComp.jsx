import React from 'react'
import { GoDatabase } from "react-icons/go";
import { Colors } from '../Constant/Color';

const RepoComp = ({name,visibility,language,size,lastUpdated}) => {
          return (
                    <div className='w-[100%] p-3 border'>
                              <div className='px-3 flex items-center gap-5'><h1>{name}</h1> <p className='p-1 px-2 rounded-xl border border-blue-400 bg-blue-50 text-xs' style={{ color: Colors.button }} >{visibility}</p> </div>
                              <div className='px-3 flex gap-10 md:gap-3 mt-5'>
                                        <div className='flex items-center gap-2'><h1 className='text-sm text-slate-700'>{language}</h1> <div className='w-2 h-2 rounded-full' style={{ backgroundColor: Colors.button }}></div> </div>
                                        <div className='flex items-center gap-2'><GoDatabase className='w-3 h-3' /> <p className='text-sm text-slate-700'>{size}</p></div>
                                        <p className='text-sm text-slate-700'>{lastUpdated}</p>
                              </div>
                    </div>
          )
}

export default RepoComp
