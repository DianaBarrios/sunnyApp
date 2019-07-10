import React, { useContext, useReducer } from "react";
import { auth, db } from "./firebase.js";
import { UserAuthContext } from "./UserProvider";
import styles from "./signin.module.css";
import Project from "./project-description.js";

class JoinProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
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
            message: this.state.message,
            segment_id: window.location.pathname.split("/")[2]
        }

        let first_name = data.first_name;
        let last_name = data.last_name;
        let email = data.email;
        let message = data.message;
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
                message,
                segment_id
            })
        };

        fetch(url, options);

        this.setState({
            message: ""
        })

    };

    render(){
        return (
            <div className="modall">
                <form className={styles.form}>
                    <h4>THANKS FOR YOUR HELP</h4>
                    
                    <p><hr />
                        We will get in touch with you soon to give <br/> you further information about the event.</p>
                    <p>Please, ask your boss for the time off!</p> 
                    <textarea class="form-control" id="textArea" rows="3" placeholder="If you want to take part with a colleague please write his/her name" name="message" value={this.state.message}  onChange={e => this.handleChange(e)}></textarea>
                    <button onClick={(e) => this.handleSubmit(e) } class="btn btn-danger btn-lg btn-block my-4" >
                        APPLY
            </button>
                </form>
            </div>
        );

    }
}

JoinProject.contextType = UserAuthContext;

export default JoinProject;
