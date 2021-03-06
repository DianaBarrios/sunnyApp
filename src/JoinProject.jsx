import React from "react";
import { UserAuthContext } from "./UserProvider";
import styles from "./signin.module.css";

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

    handleClose(e) {
        this.props.onSubmit();
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

        this.props.onSubmit();
    };

    render() {
        return (
            <div className="modall">
                <form className={styles.form}>
                    <div class="d-flex bd-highlight">
                        <div class="p-2 w-100 bd-highlight"><h4>ALMOST THERE!</h4></div>
                        <div class="p-2 flex-shrink-1 bd-highlight">
                            <button onClick={(e) => this.handleClose(e)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <p class="font-italic"> <hr /> Want to participate with more people? (Optional)
                    </p>
                    <textarea class="form-control" id="textArea" rows="3" placeholder="If you want to participate with colleagues please write their names" name="message" value={this.state.message} onChange={e => this.handleChange(e)}></textarea>
                    <button style={{
                        width: "290px",
                        height: "45px",
                        background: "#FE6348",
                        borderRadius: "6px",
                        color: "white",
                        border: 0,
                        zIndex: 2,
                        alignSelf: "center"
                    }} onClick={(e) => this.handleSubmit(e)} class="btn btn-block my-4" >
                        Apply for project
            </button>
                    <p class="font-weight-light">Click "Apply for project" to confirm</p>
                </form>
            </div>
        );

    }
}

JoinProject.contextType = UserAuthContext;

export default JoinProject;