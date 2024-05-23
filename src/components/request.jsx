import React from 'react';
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Header from './utilities/header';

const Request = ({ datas }) => {
  return (
    <main className='flex justify-start items-center w-full px-4'>
      <div className='max-w-xl bg-gray-900 overflow-hidden'>
        {datas ? (
          <>
            <Header/>
            <div className='overflow-y-auto max-h-80 border-l-2'>
              <SyntaxHighlight language='javascript' style={darcula} wrapLongLines={true}>
                {datas}
              </SyntaxHighlight>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Request;
