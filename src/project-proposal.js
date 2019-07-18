import React from "react";
import CreateProject from "./components/CreateProject";
import { Redirect } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";
import Footer from "./components/Footer";
import Header from "./Header";

class ProjectProposal extends React.Component {
  componentDidMount() {
    document.getElementById("root").scrollTo(0, 0);
  }

  render() {
    if (!this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header />
        <div className="container my-5 col-8">
          <h1>Propose a project!</h1>
        </div>
        <div className="container my-5 col-8">
          <CreateProject />
        </div>
        <Footer />
      </div>
    );
  }
}

ProjectProposal.contextType = UserAuthContext;

export default ProjectProposal;
