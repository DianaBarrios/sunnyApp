import React, { useReducer } from "react";
import { auth, db } from "./firebase.js";
import styles from "./signin.module.css";

const initialState = {
  email: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
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

export default function Signin(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .then(res => {
        if (props.onClick) {
          props.onClick();
        }
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
    <div className="modall">
      <form className={styles.form}>
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
          Login
        </button>
      </form>
    </div>
  );
}
