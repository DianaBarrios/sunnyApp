import React, { useReducer } from "react";
import styles from "./signup.module.css";
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

export default function Signup(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    auth
      .createUserWithEmailAndPassword(state.email, state.password)
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
      <label for="name of the form"><h3>Sign up for an account</h3></label>
        
      <div class="form-row mt-3">
       <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          name="firstName"
          value={state.firstName}
          onChange={e =>
            dispatch({ type: "CHANGE_FIRSTNAME", value: e.target.value })
          }
        />
        </div>
      <div class="form-group col">
        <input
          type="text"
          class="form-control"
          placeholder="Last Name"
          name="lastName"
          value={state.lastName}
          onChange={e =>
            dispatch({ type: "CHANGE_LASTNAME", value: e.target.value })
          }
        />
        </div>
    </div>
        
    <div class="form-group"> 
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

     <div class="form-group">    
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
              zIndex: 2,
              alignSelf: "center"
            }} type="submit" onClick={handleSubmit}>
          Create Account
        </button>

      </form>
    </div>
  );
}
