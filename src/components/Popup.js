import React from 'react';
import './popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div class="row mt-4 mx-auto">
                        <div class="col">
                            <h2>JOIN THIS PROJECT</h2>
                        </div>
                    </div>
                    <form>
                        <div class="form-group px-3" id="apply-form">
                            <div class="form-row mt-4">
                                <div class="col">
                                    <input type="text" name="firstName" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" name="lastName" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="form-row my-3">
                                <div class="col">
                                    <input type="email" name="email" class="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <button onClick={this.props.closePopup} class="btn btn-danger btn-lg btn-block mb-4">Join now</button>
                        </div>
                    </form>
                        
                </div>
            </div>
        );
    }
}

export default Popup;