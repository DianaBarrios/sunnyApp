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
        <label for="name of the form"><h3>Sign into my account</h3></label>
        
        <div className="form-group mt-3">
        <input
          type="email"
          class="form-control"
          placeholder="Company Email"
          name="email"
          value={state.email}
          onChange={e =>
            dispatch({ type: "CHANGE_EMAIL", value: e.target.value })
          }
        />
        </div>
    
        <div className="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={e =>
            dispatch({ type: "CHANGE_PASSWORD", value: e.target.value })
          }
        />
        </div>

        <button style={{
              width: "290px",
              height: "45px",
              background: "#FE6348",
              borderRadius: "6px",
              color: "white",
              border: 0,
              zIndex: 2
            }} type="submit" className="btn btn-danger" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}