import React, { useState } from 'react';

const FormInput = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      await onSubmit(content);
      setLoading(false);
    }, 1000); // * Delay 1 second
  };

  return (
    <>
      <label className='relative py-9 ml-6 w-[700px] flex items-center gap-2'>
        <form  
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="Ask Questions..."
            className='grow py-2 px-2 w-[700px] border-b-2
            border-slate-500 outline-none text-lg' 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button 
            onClick={handleSubmit}
            type='button'
            className={`absolute right-1 w-8 h-8 text-white ${loading}`}
            disabled={loading}
          >
            {loading ? <div class="custom-loader py-1 px-2 absolute right-0 bottom-3.5 text-gray-500 text-xl"></div> : 
              <div className='text-gray-500 text-2xl font-bold bg-white'>
                <i className='bx bx-send'></i>
              </div>
            }
          </button>
        </form>
      </label>
      
      {/* <label className="relative py-9 ml-6 w-[700px] flex items-center gap-2">
        <form action=""
          // onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            className="grow py-2 px-4 border-b-2
            border-slate-500 outline-none text-lg" 
            placeholder="Ask Questions..." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button 
            onClick={handleSubmit}
            type='button'
            className={`absolute right-1 w-8 h-8 text-2xl ${loading}`}
            disabled={loading}
          >
            {loading ? <div class="custom-loader absolute right-1 w-8 h-8 text-gray-500 text-xl"></div> : 
              <div className='text-gray-500 text-2xl font-bold bg-white'>
                <i class='bx bx-send'></i>
              </div>
            }
          </button>
        </form>
      </label> */}
    </>
  );
};

export default FormInput;
