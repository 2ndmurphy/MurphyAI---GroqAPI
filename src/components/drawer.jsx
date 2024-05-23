import React, { useState } from 'react';
import { requestToGroqApi } from "../utils/groq"
import FormInput from './FormInput';
import Request from './request';

const Drawer = () => {
  const [data, setData] = useState("");

  const handleFormSubmit = async (content) => { 
    const ai = await requestToGroqApi(content);
    setData(ai);
  };

  return (
    <div className="drawer lg:drawer-open bg-whitw">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"></label>
        <FormInput onSubmit={handleFormSubmit} />
        <Request datas={data} />
      </div> 
      
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200 bg-white text-base-content">
          {/* Sidebar content here */}
          <li><a>INI SIDEBAR</a></li>
          <li><a>INI SIDEBAR</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
