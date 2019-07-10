import React, { useContext, useState } from "react";
import CreateProject from "./components/CreateProject";
import { Redirect } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";

class ProjectProposal extends React.Component {
  render() {
    const context = useContext(UserAuthContext);

    if (!context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div class="container">
          <h1>Propose a project!</h1>
        </div>
        <div class="container">
          <CreateProject />
        </div>
      </div>
    );
  }
}

export default ProjectProposal;
