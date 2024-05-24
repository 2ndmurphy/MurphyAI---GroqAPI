import React, { useState } from 'react'

const Header = ({ textToCopy }) => {
  const [rate, setRate] = useState(null); // null, 'like', or 'dislike'
  
  const handleRate = (newRate) => {
    setRate(newRate)
  }
  
  const rateIcon = () => {
    if (rate === 'like') {
      return <i className='bx bx-like text-blue-500'></i>;
    } else if (rate === 'dislike') {
      return <i className='bx bx-dislike text-red-500'></i>;
    }
    return null;
  };
  
  // * CLIP BOARD FUNCTIONS
  const copyToClipboard = () => {
    navigator.clipboard.writeText( textToCopy ) 
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy!', err);
      });
  }
  
  
  return (
    <div className="flex bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">murphyAI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className='text-xl' onClick={copyToClipboard}>
              <i class='bx bx-copy'></i>
            </a>
          </li>
          <li>
            <details>
              <summary className='text-md'>
                Rate {rateIcon()}
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a
                     className={`text-lg ${rate === 'like' ? 'text-blue-500' : ''}`} 
                     onClick={() => handleRate('like')}
                  >
                    <i class='bx bx-like' ></i>
                  </a>
                </li>
                <li>
                  <a
                    className={`text-lg ${rate === 'dislike' ? 'text-red-500' : ''}`} 
                    onClick={() => handleRate('dislike')}
                  >
                    <i class='bx bx-dislike' ></i>
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header