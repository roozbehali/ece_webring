import React from 'react'
import { Input } from '@/components/ui/input'

const Search = () => {
  return (
  // wrapper div
  <div class="w-full h-full">
    {/* search bar */}
    <div class="w-full grid grid-cols-7">
      <div class="col-span-1 bg-black font-mono text-neutral-500 text-lg flex w-full flex items-center justify-center">grep&gt;</div>
      <Input type="search" placeholder="filter by name, year, site ..."></Input>
    </div>

    {/* search results */}
    {/* TODO */}
  </div>
  )
}

export default Search