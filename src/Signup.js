import React, { useReducer, useCallback } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIRSTNAME":
      return {
        ...state,
        firstName: action.value
      };
    default:
      return state;
  }
};

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNameCallback = useCallback(e => {
    dispatch({ type: "CHANGE_FIRSTNAME", value: e.target.value });
  });

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={state.firstName}
        onChange={changeNameCallback}
      />
      <input type="text" placeholder="Last Name" name="lastName" />
      <input type="email" placeholder="Company Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit"> Submit </button>
    </form>
  );
}
