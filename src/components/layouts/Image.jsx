import React from 'react'
import { useState, useEffect } from 'react'
import { useMember } from '@/context/MemberContext';
import AsciiArtConverter from './ASCIIText';

const Image = () => {
  const { memberItem } = useMember();
  let firstName = memberItem.name.split(' ')[0].toLowerCase() // to get image

  return (
    <div className="min-w-[350px] max-w-[350px] min-h-[425px] flex flex-col items-center gap-4 px-4 pt-6 font-mono text-white border-2 border-dotted rounded-lg outline outline-2 outline-offset-8 outline-stone-500 outline-dashed border-stone-600">
      <div className='px-4 pb-8 space-y-6'>
        <AsciiArtConverter imagePath={`/people/${firstName}.png`} />
        <div className="text-center">
          <p className="font-bold">{memberItem.name} </p>
          <p>{memberItem.cohort}</p>
          <p>{memberItem.year} </p>
          {memberItem.legacy ?
            <p>Legacy status:&nbsp;
              <span className="text-yellow-700">{memberItem.status}</span>
            </p>
            : <></>
          }
          <a href={memberItem.siteURL} target="_blank" className="font-mono text-white truncate hover:text-stone-300">{memberItem.siteURL}</a>
        </div>
      </div>
    </div>
  )
}
export default Image
