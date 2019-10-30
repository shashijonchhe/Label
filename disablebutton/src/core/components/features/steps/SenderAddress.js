import React, { Component } from 'react';

class SenderAddress extends Component {
    constructor(props) {
        super(props);
        this.senderNameChangeHandler = this.senderNameChangeHandler.bind(this);
        this.senderStreetChangeHandler = this.senderStreetChangeHandler.bind(this);
        this.senderZipChangeHandler = this.senderZipChangeHandler.bind(this);
        this.senderCityChangeHandler = this.senderCityChangeHandler.bind(this);
        this.senderStateChangeHandler = this.senderStateChangeHandler.bind(this);
    }
    senderNameChangeHandler(event) {
        this.props.senderNameChangeHandler(event.target.value);
    }
    senderStreetChangeHandler(event) {
        this.props.senderStreetChangeHandler(event.target.value);
    }
    senderZipChangeHandler(event) {
       
        this.props.senderZipChangeHandler(event.target.value);
    }
    senderCityChangeHandler(event){
        this.props.senderCityChangeHandler(event.target.value);
    }
    senderStateChangeHandler(event){
        this.props.senderStateChangeHandler(event.target.value);
    }
    render() {
        const { senderAddress } = this.props;
        return (
            <div className="sender-address">
                <h3 className="">Sender's address</h3>
                <div className="form-inline">
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input type='text' name='name'
                                className="form-control-plaintext form-control-input"
                                value={senderAddress.name} onChange={this.senderNameChangeHandler} />
                        </div>

                    </div>
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Street:</label>
                        <div className="col-sm-10">
                            <input type='text' name='street'
                                className="form-control-plaintext form-control-input"
                                value={senderAddress.street} onChange={this.senderStreetChangeHandler} />
                        </div>
                    </div>
                    
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">City:</label>
                        <div className="col-sm-10">
                            <input type='text' name='city'
                                className="form-control-plaintext form-control-input"
                                value={senderAddress.city} onChange={this.senderCityChangeHandler} />
                                   
                                </div>
                    </div>

                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">State:</label>
                        <div className="col-sm-10">
                            <input type='text' name='state'
                                className="form-control-plaintext form-control-input"
                                value={senderAddress.state} onChange={this.senderStateChangeHandler} />
                        </div>
                    </div>

                    {/* <div className='city'>
                <input type='text' name='city' value={this.state.city} onChange={this.cityChangeHandler}/>
            </div>
            <div className='state'>
                <input type='text' name='name' value={this.state.name} onChange={this.nameChangeHandler}/>
            </div> */}
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Zip:</label>
                        <div className="col-sm-10">
                            <input type='text' name='zip' className="form-control-plaintext form-control-input"
                                value={senderAddress.zip} onChange={this.senderZipChangeHandler} />
                        </div>
                    </div>

                </div>
             
            </div>

        );
    }
}
export default SenderAddress;

