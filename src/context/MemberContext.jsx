import { createContext, useContext, useState } from 'react';

const MemberContext = createContext({});

export const MemberProvider = ({children}) => {
  const [memberItem, setMemberItem] = useState();
  
  return (
    <MemberContext.Provider value={{ memberItem, setMemberItem }}>
      {children}
    </MemberContext.Provider>
  )
}

export const useMember = () => useContext(MemberContext)