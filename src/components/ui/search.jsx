import React from 'react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { members } from '@/pages/api/members';
import Fuse from 'fuse.js';

const Search = () => {
  // Fuse.js for search
  const options = {
    threshold: 0.3,
    keys: ['name', 'siteURL', 'year'],
    useExtendedSearch: true,
  };
  const fuse = new Fuse(members, options);

  // initially set to all members
  const [currMemberState, setCurrMemberState] = useState(
    [fuse.search('" "')][0]
  );

  const handleKeyDown = (e) => {
    // if(e.keyCode === 13) {
    if (!e.target.value) {
      setCurrMemberState([fuse.search('" "')][0]);
    } else {
      setCurrMemberState([fuse.search(e.target.value)][0]);
    }
    // }
  };

  return (
    // wrapper div
    <section className="w-full h-full space-y-4">
      {/* search bar */}
      <div className="flex items-stretch font-mono text-lg text-secondary">
        <span className="px-4 py-2 bg-black">grep&gt;</span>
        <Input
          className="max-w-[400px] placeholder-black"
          type="text"
          placeholder="filter by name, year, site ..."
          onChange={handleKeyDown}
        />
      </div>

      {/* search results */}
      <ul className="pl-24 space-y-2 overflow-y-scroll list-disc text-zinc-50 h-[400px]">
        {currMemberState.map((member, index) => {
          return (
            <li
              key={index}
              className="px-4 py-2 font-mono border-2 border-dotted border-zinc-700 hover:bg-zinc-900 hover:cursor-crosshair max-w-[600px]"
            >
              {member.item.name} |&nbsp;
              <span className="text-orange-500 underline hover:text-yellow-600/40">
                <a href={member.item.siteURL} target="_blank">
                  {member.item.siteURL}
                </a>
              </span>
              &nbsp;| {member.item.year}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Search;
