import React from 'react'
import { useState, useEffect } from 'react'
import { useMember } from '@/context/MemberContext';
import AsciiArtConverter from './test';

const Image = () => {
  const { memberItem } = useMember();
  let firstName = memberItem.name.split(' ')[0].toLowerCase()

  return (
    <div className="grid gap-4 p-8 font-mono text-white border-4 border-dotted rounded-lg lg:grid-cols-5 border-stone-600">
      <div className='col-span-2'>
        <p className="font-bold">{memberItem.name} </p>
        <p>{memberItem.cohort}</p>
        <p>{memberItem.year} </p>
        {memberItem.legacy ?
          <p>Legacy status:&nbsp;
            <span className="text-yellow-700">{memberItem.status}</span>
          </p>
          : <></>
        }
      </div>
      <div className='object-fill col-span-3'>
      <AsciiArtConverter imagePath={`/people/${firstName}.jpg`} />

      {/* <img src={`/people/${firstName}.jpg`} alt={''}></img> */}
      </div>
    </div>
  )
}
export default Image
