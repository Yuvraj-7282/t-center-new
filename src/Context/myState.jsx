import React from 'react'
import MyContext from './myContext';
function myState({children}) {
  return (
    <MyContext.Provider value={"yuvraj"}>
        {children}
    </MyContext.Provider>
  )
}

export default myState