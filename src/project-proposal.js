import React, { useContext, useState } from "react";
import CreateProject from "./components/CreateProject";
import { Redirect } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";
import Footer from "./components/Footer";
import Header from "./Header";

class ProjectProposal extends React.Component {
  render() {
    if (!this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header />
        <div class="container my-5">
          <h1>Propose a project!</h1>
        </div>
        <div class="container my-5">
          <CreateProject />
        </div>
        <Footer />
      </div>
    );
  }
}

ProjectProposal.contextType = UserAuthContext;

export default ProjectProposal;