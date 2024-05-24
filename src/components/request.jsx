import React from 'react';
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Element } from 'react-scroll';
import Header from './utilities/header';

const Request = ({ datas }) => {
  return (
    <main className='flex justify-start items-center w-full px-4'>
      <div className='max-w-3xl bg-gray-900 overflow-hidden mx-auto'>
        {datas ? (
          <>
            <Header textToCopy={datas}/>
            <Element 
              name="scrollContainer" 
              className='overflow-y-auto max-h-80 border-l-2 custom-scrollbar'>
              <SyntaxHighlight language='javascript' style={atomDark} wrapLongLines={false}>
                {datas}
              </SyntaxHighlight>
            </Element>
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Request;
