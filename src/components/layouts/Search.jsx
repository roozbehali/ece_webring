import React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { members } from '@/pages/api/members';
import Fuse from 'fuse.js';
import { useMember } from '@/context/MemberContext';

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
    members.map(member => ({ item: member }))
  );

  const handleSearch = (e) => {
    if (!e.target.value) {
      setCurrMemberState(members.map(member => ({ item: member })));
    } else {
      setCurrMemberState(fuse.search(e.target.value));
    }
  };

  const { setMemberItem } = useMember();

  const shortenURL = (url) => {
    if (typeof url !== 'string') {
      console.error('The provided URL is not a string:', url);
      return;
    }
    return url.replace(/(^\w+:|^)\/\/(www\.)?/, '');
  };

  return (
    <section className="grid max-w-[600px] min-w-[300px] h-full w-full space-y-4 pt-10">
      {/* search bar */}
      <div className="flex flex-row-reverse items-stretch font-mono text-lg text-secondary max-h-[44px] min-w-full">
        <Input
          className="h-full peer"
          type="text"
          placeholder="filter by name, year, site ..."
          onChange={handleSearch}
        />
        <span className="px-4 py-2 transition duration-300 bg-black text-stone-700 peer-focus-within:text-yellow-500">
          search&gt;
        </span>
      </div>

      {/* search results */}
      <ul className="pl-6 pb-4 space-y-2 overflow-y-scroll text-white max-h-[300px] min-w-full">
        {currMemberState.map((member, index) => {
          return (
            <div key={member.item.name} className="flex items-center">
              <span className="pr-8 text-yellow-500">&gt;</span>

              <li
                onPointerOver={() => setMemberItem(member.item)}
                key={member.item.name}
                className="px-6 py-2.5 font-mono text-sm border-2 border-dotted border-stone-600 hover:bg-stone-800 hover:cursor-crosshair w-full truncate"
              >
                <span className={member.item.legacy ? 'text-yellow-700' : ''}>
                  {member.item.name}
                </span>
                &nbsp;|&nbsp;
                <span className="text-yellow-500 underline transition duration-200 hover:text-yellow-600/40">
                  <a href={member.item.siteURL} target="_blank" rel="noreferrer">
                    {shortenURL(member.item.siteURL)}
                  </a>
                </span>
                &nbsp;{!member.item.legacy ? '|' : ''} {member.item.year}
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Search;
