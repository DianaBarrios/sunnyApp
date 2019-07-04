import React from "react";
import "./popup.css";
const firebase = require("../firebase.js");
const functions = firebase.functions;

class Popup extends React.Component {
    constructor() {
        super();

        this.state = {
            subscribed: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let first_name = document.getElementById("apply-firstName").value;
        let last_name = document.getElementById("apply-lastName").value;
        let email = document.getElementById("apply-email").value;
        let segment_id = window.location.pathname.split("/")[2];
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
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div class="row mt-4 mx-auto">
                        <div class="col">
                            <h2>JOIN THIS PROJECT</h2>
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
                                        class="form-control"
                                        placeholder="First name"
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        type="text"
                                        id="apply-lastName"
                                        name="lastName"
                                        class="form-control"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div class="form-row my-3">
                                <div class="col">
                                    <input
                                        type="email"
                                        id="apply-email"
                                        name="email"
                                        class="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={this.handleClick}
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

export default Popup;
