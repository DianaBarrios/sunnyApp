import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";

export default function ProtectedRoute(props) {
  const context = useContext(UserAuthContext);

  if (context.status === "FETCHING") {
    return <></>;
  }

  if (!context.user) {
    return <Redirect to="/" />;
  }

  return <>{props.children}</>;
}
