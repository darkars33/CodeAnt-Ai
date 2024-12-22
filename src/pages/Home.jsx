import React, {useState} from 'react';
import Navbar from '../Component/Navbar';
import { Colors } from '../Constant/Color';
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import RepoComp from '../Component/RepoComp';
import { Repos } from '../Constant/DummyRepos';

const Home = () => {
  console.log(Repos);
  

  const [data, setData] = useState(Repos);
  const [search, setSearch] = useState("")

  let size = data.length

 const  handleSearch = (e) =>{
    setSearch(e.target.value)
    let value = e.target.value;
    let result = Repos.filter((repo) =>{
      return repo.name.toLowerCase().includes(value.toLowerCase())
    })
    setData(result)
    size = result.length
  }




  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="w-full" style={{ backgroundColor: Colors.background2 }}>
        <div className="ml-[15rem] md:ml-0 md:mt-16 p-5 md:p-0 flex justify-center">
          <div className="w-full border rounded-md h-[94vh] md:h-[90vh] flex flex-col" style={{ backgroundColor: Colors.background }}>
            <div className="p-3">
              <div className="flex justify-between items-start flex-wrap">
                <div className="p-3 flex flex-col gap-1 md:p-0">
                  <h1 className="text-2xl font-normal">Repositories</h1>
                  <p className="text-sm" style={{ color: Colors.text2 }}> 
                    {size} total repositories</p>
                </div>
                <div className="p-3 flex gap-3 md:px-0">
                  <button
                    className="flex items-center gap-2 p-2  border-[2px] rounded-md text-sm"
                    style={{ color: Colors.text2 }}
                  >
                    <LuRefreshCw className="text-black w-4 h-4" /> Refresh All
                  </button>
                  <button
                    className="flex items-center gap-2 p-2 border rounded-md text-sm text-white md:text-[0.8rem]"
                    style={{ backgroundColor: Colors.button }}
                  >
                    <FiPlus className="w-5 h-5" /> Add Repositories
                  </button>
                </div>
              </div>
              <div className="w-[20rem] md:w-[100%] px-3 relative md:p-0">
                <CiSearch className="absolute top-1 left-4 md:left-1 text-black w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search Repositories"
                  className="border w-full border-gray-300 p-1 pl-10 rounded-md focus:outline-none"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="mt-3 overflow-auto">
              {data.map((repo, index) => {
                return (
                  <RepoComp
                    key={index}
                    name={repo.name}
                    visibility={repo.visibility}
                    language={repo.language}
                    size={repo.size}
                    lastUpdated={repo.lastUpdated}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
