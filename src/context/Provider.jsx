import React from "react";
import Context from './Context'

function Provider({ children }) {
  const states = {}
  return (
    <Context.Provider value={ states }>
      {children}
    </Context.Provider>
  )
}
export default Provider;