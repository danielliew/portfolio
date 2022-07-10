import React, { createContext, ReactElement, ReactNode, useState } from "react";

export const CursorContext = createContext({
  cursor: {
    active: true
  },
  setCursor: ({active} : {active: boolean}) => {}
});

const CursorContextProvider = ({ children }: {children: ReactNode}) : ReactElement => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={{cursor, setCursor}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;