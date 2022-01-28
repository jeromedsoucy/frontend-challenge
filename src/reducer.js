const initialState = { count: 0 };

export const formReducer = (state, action) => {
  console.log("====", {
    ...state,
    ...action.payload,
  });
  switch (action.type) {
    case "udpate":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
