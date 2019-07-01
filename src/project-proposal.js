import React from 'react'
import CreateProject from './components/CreateProject';

class ProjectProposal extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Propose a project!</h1>
                </div>
                <div class="container">
                    <CreateProject />
                </div>
            </div>

        )
    }
}

export default ProjectProposal