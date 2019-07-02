import React from 'react';
import './popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>JOIN THIS PROJECT</h1>
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <button onClick={this.props.closePopup}>Join now</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Popup;
