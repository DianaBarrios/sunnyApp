import React, { useContext, useState, useEffect } from "react";
import "./popup.css";
import {
    withRouter
} from 'react-router-dom';
import { UserAuthContext } from "../UserProvider";
const firebase = require("../firebase.js");

class Popup extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            firstName: "",
            lastName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const form = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            segment_id: window.location.pathname.split("/")[2]
        }

        let first_name = form.first_name;
        let last_name = form.last_name;
        let email = form.email;
        let segment_id = form.segment_id;

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
            email: "",
            firstName: "",
            lastName: ""
        })

        this.props.history.push('/projects');
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div class="row mt-4 mx-auto">
                        <div class="col">
                            <h2>{this.props.title}</h2>
                        </div>
                    </div>
                    <form>
                        <div class="form-group px-3" id="apply-form">
                            <div class="form-row mt-4">
                                <div class="col">
                                    <input
                                        type="text"
                                        id="apply-firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        class="form-control"
                                        placeholder="First name"
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        type="text"
                                        id="apply-lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        class="form-control"
                                        placeholder="Last name"
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div class="form-row my-3">
                                <div class="col">
                                    <input
                                        type="email"
                                        id="apply-email"
                                        name="email"
                                        value={this.state.email}
                                        class="form-control"
                                        placeholder="Email"
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={(e) => this.onSubmit(e)}
                                class="btn btn-danger btn-lg btn-block mb-4"
                            >
                                Join now
              </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Popup);