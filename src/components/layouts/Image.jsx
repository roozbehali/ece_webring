import React from 'react'
import { useState, useEffect } from 'react'
import { useMember } from '@/context/MemberContext';
import AsciiArtConverter from './ASCIIText';

const Image = () => {
  const { memberItem } = useMember();
  let firstName = memberItem.name.split(' ')[0].toLowerCase() // to get image

  const shortenURL = (url) => {
    if (typeof url !== 'string') {
      console.error('The provided URL is not a string:', url);
      return '';
    }
    // This will remove the protocol (http, https) and the "www." subdomain if present
    return url.replace(/(^\w+:|^)\/\/(www\.)?/, '');
  };
  
  return (
    <div className="min-w-[350px] max-w-[350px] min-h-[425px] flex flex-col items-center gap-4 px-4 pt-6 font-mono text-white border-2 border-dotted rounded-lg outline outline-2 outline-offset-8 outline-stone-500 outline-dashed border-stone-600">
      <div className='px-4 pb-8 space-y-6'>
        <AsciiArtConverter imagePath={`/people/${firstName}.png`} />
        <div className="text-center">
          <p className="font-bold">{memberItem.name} </p>
          <p className="text-stone-400">{memberItem.cohort}</p>
          <p className="text-stone-400">{memberItem.year} </p>
          {memberItem.legacy ?
            <p className="text-stone-400">Legacy status:&nbsp;
              <span className="text-yellow-700">{memberItem.status}</span>
            </p>
            : <></>
          }
          <a href={memberItem.siteURL} target="_blank" className="font-mono text-yellow-500 transition duration-200 hover:text-yellow-600/40">{shortenURL(memberItem.siteURL)}</a>
        </div>
      </div>
    </div>
  )
}
export default Image
