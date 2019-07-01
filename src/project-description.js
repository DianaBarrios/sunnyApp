import React from "react";
import { Route, Link } from "react-router-dom";
const firebase = require("./firebase.js");
const db = firebase.db;

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: []
        };
    }

    componentDidMount() {
        let id = Number(this.props.match.params.id);
        let projectsRef = db.collection("projects").where('segmentID', '==', id);

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
                {this.state.docs.map(doc => (
                    <div>
                        <div class="container">
                            <div class="d-flex justify-content-around">
                                <img src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" class="img-fluid" alt="..."></img>
                                <img src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" class="img-fluid" alt="..."></img>
                                <img src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" class="img-fluid" alt="..."></img>
                            </div>
                        </div>

                        <div class="container my-5">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="container mt-4">
                                        <h1 key={doc.id}>{doc.projectName}</h1>
                                        <p>Contact: {doc.email}</p>
                                        <p>Organizer: {doc.firstName} {doc.lastName}</p>
                                        <p>Description of project: {doc.description}</p>
                                    </div>
                                </div>

                                <div class="col-sm">
                                    <div class="card">
                                        <div class="card-body">
                                            <a href="#" class="btn btn-danger my-3">Register now</a>
                                            <h5 class="card-title">TIME</h5>
                                            <p class="card-text">Some quick example.</p>
                                            <h5 class="card-title">WHEN</h5>
                                            <p class="card-text">Some quick example.</p>
                                            <h5 class="card-title">WHERE</h5>
                                            <p class="card-text">Some quick example.</p>
                                            <h5 class="card-title">REQUIREMENTS</h5>
                                            <p class="card-text">Some quick example.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Project;