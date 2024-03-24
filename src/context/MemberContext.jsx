import { createContext, useContext, useState } from 'react';

// global context accessible by every child in the component tree
// updated in 'search' onMouseEnter, used for image display
const MemberContext = createContext({});

export const MemberProvider = ({children}) => {
  // note: member.item is not a list, it is an object
  const [memberItem, setMemberItem] = useState({name: 'select profile.'});
  
  return (
    <MemberContext.Provider value={{ memberItem, setMemberItem }}>
      {children}
    </MemberContext.Provider>
  )
}

export const useMember = () => useContext(MemberContext)