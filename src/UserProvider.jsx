import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase.js";

const UserAuthContext = React.createContext({ user: null });

export default function UserProvider(props) {
  const [state, setState] = useState({ user: true, status: "FETCHING" });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        return setState({ user: null, status: "COMPLETE" });
      }

      db.collection("users")
        .doc(user.uid)
        .get()
        .then(fullUser => {
          setState({ user: fullUser.data(), status: "COMPLETE" });
        });
    });
  }, []);

  return (
    <UserAuthContext.Provider value={state}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

export { UserAuthContext };
