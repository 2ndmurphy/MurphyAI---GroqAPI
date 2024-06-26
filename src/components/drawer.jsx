import React, { useState } from 'react';
import { requestToGroqApi } from "../utils/groq";
import FormInput from './FormInput';
import Request from './request';

const Drawer = () => {
  const [data, setData] = useState("");

  const handleFormSubmit = async (content) => { 
    const ai = await requestToGroqApi(content);
    setData(ai);
  };

  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-end gap-16">
        {/* Page content here */}
        <div>
        <label htmlFor="my-drawer-2" className="flex justify-between btn lg:hidden">
          <div className='flex flex-col gap-2 bg-slate-500 p-2 rounded hover:ring hover:ring-slate-200'>
            <span className='w-8 h-1 bg-slate-200'></span>
            <span className='w-8 h-1 bg-slate-200'></span>
            <span className='w-8 h-1 bg-slate-200'></span>
          </div>
          <div className='text-2xl text-slate-500 font-bold'>
            <h1>MurphyAI</h1>
          </div>
        </label>  
        </div>
        <Request datas={data} />
        <FormInput onSubmit={handleFormSubmit} />
      </div> 
      
      {/* INI ADALAH SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu bg-base-200 w-56 h-full lg:w-64 p-4">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              TODO-list
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Item 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
