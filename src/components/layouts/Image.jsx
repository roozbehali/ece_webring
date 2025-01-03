import React from 'react'
import { useMember } from '@/context/MemberContext';
import AsciiArtConverter from './ASCIIText';

const Image = () => {
  const { memberItem } = useMember();
  
  const firstName = memberItem?.name
    ? memberItem.name.split(' ')[0].toLowerCase() 
    : null;

  const shortenURL = (url) => {
    if (typeof url !== 'string') {
      console.error('The provided URL is not a string:', url);
      return '';
    }
    return url.replace(/(^\w+:|^)\/\/(www\.)?/, '');
  };
  
  return (
    <div className="min-w-[350px] max-w-[350px] h-[425px] flex flex-col items-center gap-4 px-4 pt-6 font-mono text-white border-2 border-dotted rounded-lg outline outline-2 outline-offset-8 outline-stone-500 outline-dashed border-stone-600 justify-center">
      <div className='px-4 pb-8 space-y-6'>
        {firstName && (
          <AsciiArtConverter imagePath={`/people/${firstName}.png`} />
        )}
        <div className="text-center">
          <p className={`font-bold ${!memberItem?.name ? 'mt-6' : ''}`}>{memberItem?.name || 'select profile.'}</p>
          {memberItem?.legacy ? (
            <p className="text-stone-400">Legacy status:&nbsp;
              <span className="text-yellow-700">{memberItem.status}</span>
            </p>
          ) : memberItem?.cohort && memberItem?.year && (
            <p className="text-stone-400">{memberItem.cohort} '{memberItem.year.toString().slice(2)}</p>
          )}
          {memberItem?.siteURL && (
            <a 
              href={memberItem.siteURL} 
              target="_blank" 
              rel="noreferrer" 
              className="font-mono text-yellow-500 transition duration-200 hover:text-yellow-600/40"
            >
              {shortenURL(memberItem.siteURL)}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Image
