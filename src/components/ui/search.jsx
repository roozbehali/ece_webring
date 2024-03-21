import React from 'react'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { members } from '@/pages/api/members'
import Fuse from 'fuse.js'

const Search = () => {
  // Fuse.js for search
  const options = {
    findAllMatches: true,
    threshold: 0.3,
    keys: ["name", "siteURL", "year"],
    useExtendedSearch: true,
  }
  const fuse = new Fuse(members, options)

  // initially set to all members
  const [currMemberState, setCurrMemberState] = useState([fuse.search('" "')][0])
    
  const handleKeyDown = (e) => {
    // if(e.keyCode === 13) {
      if(!e.target.value){
        setCurrMemberState([fuse.search('" "')][0])
      }
      else {
        setCurrMemberState([fuse.search(e.target.value)][0])
      }
    // }
  }
  
  return (
    // wrapper div
    <div class="w-full h-full">
    {/* search bar */}
    <div class="w-full grid grid-cols-7">
      <div class="col-span-1 bg-black font-mono text-neutral-500 text-lg flex w-full flex items-center justify-center">grep&gt;</div>
      <Input type="text" placeholder="filter by name, year, site ..." onKeyDown={handleKeyDown} onValueChange={handleKeyDown}></Input>
    </div>

    {/* search results */}
    {/* <SearchResults></SearchResults> */}
    <div class="overflow-y-scroll h-60">
      {currMemberState.map((member) => {
        return (
          <div class="w-full grid grid-cols-12 gap-5 py-2">
            <div class="col-span-1 flex items-start justify-center font-black text-lg text-white">.</div>
            <div class="flex items-center justify-start py-2 px-4 col-span-11 font-mono text-white text-sm border-dotted border-2 border-neutral-600 hover:bg-neutral-900 hover:cursor-crosshair">{member.item.name} |&nbsp;
              <div key={member.item.name} class="text-indigo-400 underline hover:text-indigo-500">
                <a href={member.item.siteURL} target="_blank">{member.item.siteURL}</a>
              </div>
              &nbsp;| {member.item.year}
            </div>
          </div> 
        )
      })}
    </div>
  </div>
  )
}

export default Search