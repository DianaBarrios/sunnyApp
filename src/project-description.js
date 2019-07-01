import React from "react";
import { Route, Link } from "react-router-dom";

class Project extends React.Component {
    render() {
        return (
            <div>Hello, this is project with id {this.props.match.params.id}</div>
        );
    }
}

export default Project;