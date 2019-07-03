import React from "react";
import { Link } from "react-router-dom";
const firebase = require("../firebase.js");
const db = firebase.db;

class ShowProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: []
        };
    }

    componentDidMount() {
        let projectsRef = db.collection("projects").orderBy('projectName').limit(4);

        let query = projectsRef.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                const prevDocs = this.state.docs;
                const newDocuments = [...prevDocs, doc.data()];
                this.setState({ docs: newDocuments });
            });
        });
    }

    render() {
        return (
            <div>
                <div class="card-deck my-4" id="projects-list">
                    {this.state.docs.map(doc => (
                        <div class="card my-4">
                            <img
                                class="card-img-top"
                                src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                                alt="Cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title" key={doc.id}>{doc.projectName}</h5>
                                <p class="card-text" key={doc.id}> {doc.description}</p>
                                <Link to={`projects/${doc.segmentID}`} key={doc.id}>
                                    <button type="button" class="btn btn-primary">Read more</button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export default ShowProjects;
