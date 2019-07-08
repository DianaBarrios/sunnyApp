import React, { useContext, useReducer } from "react";
import { auth, db } from "./firebase.js";
import { UserAuthContext } from "./UserProvider";
import styles from "./signin.module.css";
import Project from "./project-description.js";

class JoinProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bossEmail: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            first_name: this.context.user.firstName,
            last_name: this.context.user.lastName,
            email: this.context.user.email,
            bossEmail: this.state.bossEmail,
            segment_id: window.location.pathname.split("/")[2]
        }

        let first_name = data.first_name;
        let last_name = data.last_name;
        let email = data.email;
        let segment_id = data.segment_id;

        const url =
            "https://us-central1-smiles-ai.cloudfunctions.net/subscribeUserToProject";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                segment_id
            })
        };

        fetch(url, options);

        this.setState({
            bossEmail: ""
        })

    };

    render(){
        return (
            <div className="modall">
                <form className={styles.form}>
                    <input
                        type="email"
                        placeholder="Boss Email"
                        name="bossEmail"
                        value={this.state.bossEmail}
                        onChange={e => this.handleChange(e)}
                    />
                    <button onClick={(e) => this.handleSubmit(e) } class="btn btn-danger btn-lg btn-block my-4" >
                        Request off-days
            </button>
                </form>
            </div>
        );

    }
}

JoinProject.contextType = UserAuthContext;

export default JoinProject;
