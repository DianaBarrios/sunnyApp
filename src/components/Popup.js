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

    handleClick() {

        let firstName = document.getElementById("apply-firstName").value;
        let lastName = document.getElementById("apply-lastName").value;
        let email = document.getElementById("apply-email").value;
        let segmentID = window.location.pathname.split("/")[2];

        var subscribeUserToProject = functions.httpsCallable('subscribeUserToProject');

        subscribeUserToProject({
            email: email,
            firstName: firstName,
            lastName: lastName,
            segmentID: segmentID
        }).then(function (result) {
            //show success
            console.log("Success: subscribed to project!");
        }).catch(function (error) {
            //show the error
            var code = error.code;
            var message = error.message;
            var details = error.details;

            console.log("Error:");
            console.log(code);
            console.log(message);
            console.log(details);
        });
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
