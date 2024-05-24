import React, { useState } from 'react';

const FormInput = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      await onSubmit(content);
      setLoading(false);
      setContent("");  // Clear input after submission
    }, 1000); // * Delay 1 second
  };

  return (
    <div className="w-full md:w-[800px] lg:[750px] px-4 py-2 md:px-4 md:py-4">
      <form onSubmit={handleSubmit} className="relative flex justify-center items-center gap-2 w-full">
        <input 
          type="text" 
          placeholder="Ask Questions..."
          className='grow py-2 px-2 w-full border-b-2 
          border-slate-500 outline-none text-sm 
          sm:text-md md:text-lg lg:text-xl ' 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}  // Disable input when loading
        />
        <button 
          type='submit'
          className={`absolute right-1 w-8 h-8 text-white flex items-center justify-center`}
          disabled={loading}
        >
          {loading ? (
            <div className="custom-loader py-1 px-2 absolute right-1 text-gray-500 text-xl"></div>
          ) : (
            <div className='text-gray-500 text-2xl font-bold bg-white'> 
              <i className='bx bx-send'></i>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default FormInput;
