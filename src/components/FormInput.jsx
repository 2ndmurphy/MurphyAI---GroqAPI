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
    <>
      <label className='relative py-9 ml-6 w-[700px] flex items-center gap-2'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ask Questions..."
            className='grow py-2 px-2 w-[700px] border-b-2
            border-slate-500 outline-none text-lg' 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}  // Disable input when loading
          />
          <button 
            type='submit'
            className={`absolute right-1 w-8 h-8 text-white`}
            disabled={loading}
          >
            {loading ? <div className="custom-loader py-1 px-2 absolute right-1 text-gray-500 text-xl"></div> : 
              <div className='text-gray-500 text-2xl font-bold bg-white'>
                <i className='bx bx-send'></i>
              </div>
            }
          </button>
        </form>
      </label>
    </>
  );
};

export default FormInput;
