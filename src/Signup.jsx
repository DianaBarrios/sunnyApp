import React, { useReducer } from "react";
import { auth, db } from "./firebase.js";

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

    case "CHANGE_LASTNAME":
      return {
        ...state,
        lastName: action.value
      };

    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.value
      };

    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.value
      };
    default:
      return state;
  }
};

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(res => {
        db.collection("users")
          .doc(res.user.uid)
          .set({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
          });
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ...
      });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={state.firstName}
        onChange={e =>
          dispatch({ type: "CHANGE_FIRSTNAME", value: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={state.lastName}
        onChange={e =>
          dispatch({ type: "CHANGE_LASTNAME", value: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Company Email"
        name="email"
        value={state.email}
        onChange={e =>
          dispatch({ type: "CHANGE_EMAIL", value: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={e =>
          dispatch({ type: "CHANGE_PASSWORD", value: e.target.value })
        }
      />
      <button type="submit" onClick={handleSubmit}>
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}
