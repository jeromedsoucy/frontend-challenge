import React, { createContext, useReducer, useContext, useMemo } from "react";

const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const contextValue = { state, dispatch };
  // Note: we could memoize this if things get crazy... which is not the case here
  // const contextValue = useMemo(() => {
  //   return { state, dispatch };
  // }, [state, dispatch]);

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}

function useForm() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { FormProvider, useForm };
