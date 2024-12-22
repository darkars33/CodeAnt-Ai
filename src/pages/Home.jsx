import React from 'react';
import Navbar from '../Component/Navbar';
import { Colors } from '../Constant/Color';
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='w-[100%] h-screen' style={{ backgroundColor: Colors.background2 }}>
        <div className="ml-[15rem] p-5  flex justify-center" >
          <div className='p-3 w-[100%] border rounded-md' style={{ backgroundColor: Colors.background }}>
            <div className='flex justify-between items-start'>
              <div className='p-3 flex flex-col gap-1'>
                <h1 className='text-2xl font-normal'>Repositories</h1>
                <p className='text-sm' style={{color: Colors.text2}}>30 total repositories</p>
              </div>
              <div className='p-3 flex gap-3 '>
                <button className='flex items-center gap-2 p-2 border border-[2px] rounded-md text-sm' style={{color:Colors.text2}}><LuRefreshCw className='text-black w-4 h-4' /> Refresh All</button>
                <button className='flex items-center gap-2 p-2 border rounded-md text-sm text-white' style={{backgroundColor: Colors.button}}><FiPlus className='w-5 h-5  ' /> Add Repositories</button>
              </div>
            </div>
            <div className='p-3'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='p-2 text-left text-sm' style={{color: Colors.text2}}>Name</th>
                    <th className='p-2 text-left text-sm' style={{color: Colors.text2}}>Visibility</th>
                    <th className='p-2 text-left text-sm' style={{color: Colors.text2}}>Language</th>
                    <th className='p-2 text-left text-sm' style={{color: Colors.text2}}>Size</th>
                    <th className='p-2 text-left text-sm' style={{color: Colors.text2}}>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 text-sm'>design-system</td>
                    <td className='p-2 text-sm'>Public</td>
                    <td className='p-2 text-sm'>React</td>
                    <td className='p-2 text-sm'>7320 KB</td>
                    <td className='p-2 text-sm'>1 day ago</td>
                  </tr>
                  <tr>
                    <td className='p-2 text-sm'>codeant-ci-app</td>
                    <td className='p-2 text-sm'>Private</td>
                    <td className='p-2 text-sm'>JavaScript</td>
                    <td className='p-2 text-sm'>5871 KB</td>
                    <td className='p-2 text-sm'>2 days ago</td>
                  </tr>
                  <tr>
                    <td className='p-2 text-sm'>analytics-dashboard</td>
                    <td className='p-2 text-sm'>Private</td>
                    <td className='p-2 text-sm'>Python</td>
                    <td className='p-2 text-sm'>4521 KB</td>
                    <td className='p-2 text-sm'>5 days ago</td>
                  </tr>
                  <tr>
                    <td className='p-2 text-sm'>mobile-app</td>
                    <td className='p-2 text-sm'>Public</td>
                    <td className='p-2 text-sm'>Swift</td>
                    <td className='p-2 text-sm'>3096 KB</td>
                    <td className='p-2 text-sm'>3 days ago</td>
                  </tr>
                  </tbody>
              </table>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
