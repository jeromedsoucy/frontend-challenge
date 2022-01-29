import React, { createContext, useReducer, useContext } from "react";
import { FORM_INITIAL_VALUES } from "./constants";

const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "reset": {
      return FORM_INITIAL_VALUES;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, FORM_INITIAL_VALUES);

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
