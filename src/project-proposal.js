import React, { useContext, useState } from "react";
import CreateProject from "./components/CreateProject";
import { Redirect } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";

class ProjectProposal extends React.Component {
  render() {
    if (!this.context.user) {
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

ProjectProposal.contextType = UserAuthContext;

export default ProjectProposal;
