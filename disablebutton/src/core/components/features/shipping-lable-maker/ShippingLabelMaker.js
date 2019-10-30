import React, { Component } from 'react';
import Steps from './../steps/Steps';

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);
        this.senderNameChangeHandler = this.senderNameChangeHandler.bind(this);
        this.senderStreetChangeHandler = this.senderStreetChangeHandler.bind(this);
        this.senderZipChangeHandler = this.senderZipChangeHandler.bind(this);
        this.senderCityChangeHandler = this.senderCityChangeHandler.bind(this);
        this.senderStateChangeHandler = this.senderStateChangeHandler.bind(this);

        this.receiverNameChangeHandler = this.receiverNameChangeHandler.bind(this);
        this.receiverStreetChangeHandler = this.receiverStreetChangeHandler.bind(this);
        this.receiverZipChangeHandler = this.receiverZipChangeHandler.bind(this);
        this.receiverCityChangeHandler = this.receiverCityChangeHandler.bind(this);
        this.receiverStateChangeHandler = this.receiverStateChangeHandler.bind(this);

        this.weightChangeHandler = this.weightChangeHandler.bind(this);
        this.shippingOptionChangeHandler = this.shippingOptionChangeHandler.bind(this);
        this.state = {
            // initState: 'SenderAddress',
            initStep: 1,
            lastStep: 5,
            currentStep: 1,

            senderAddress: {
                name: 'John smith',
                street: '131 DartMouth st',
                city: 'Boston',
                state: 'MA',
                zip: '02116'
            },
            receiverAddress: {
                name: 'Linda Jackson',
                street: '40 Fulton st',
                city: 'New York',
                state: 'NY',
                zip: '10038'
            },
            weight: 0,
            shippingOption: 0,
            shippingCost: 0,
            errorMsg: ''
        };
        this.nextHandler = this.nextHandler.bind(this);
        this.prevHandler = this.prevHandler.bind(this);
    };
    senderNameChangeHandler(value) {
        const senderData = { ...this.state.senderAddress };
        senderData.name = value;
        this.setState({ senderAddress: senderData });
    }
    senderStreetChangeHandler(street) {
        const senderData = { ...this.state.senderAddress };
        senderData.street = street;
        this.setState({ senderAddress: senderData });
    }
    senderZipChangeHandler(zip) {
        const senderData = { ...this.state.senderAddress };
        senderData.zip = zip;
        this.setState({ senderAddress: senderData });
    }
    senderCityChangeHandler(city) {
       
        const senderData = { ...this.state.senderAddress };
        senderData.city = city;
        this.setState({ senderAddress: senderData });
    }
    senderStateChangeHandler(state) {
        const senderData = { ...this.state.senderAddress };
        senderData.state = state;
        this.setState({ senderAddress: senderData });
    }


    receiverNameChangeHandler(value) {
        const receiverData = { ...this.state.receiverAddress };
        receiverData.name = value;
        this.setState({ receiverAddress: receiverData });
    }
    receiverStreetChangeHandler(street) {
        const receiverData = { ...this.state.receiverAddress };
        receiverData.street = street;
        this.setState({ receiverAddress: receiverData });
    }
    receiverZipChangeHandler(zip) {
        const receiverData = { ...this.state.receiverAddress };
        receiverData.zip = zip;
        this.setState({ receiverAddress: receiverData });
    };
    receiverCityChangeHandler(city) {
        const receiverData = { ...this.state.receiverAddress };
        receiverData.city = city;
        this.setState({ receiverAddress: receiverData });
    };
    receiverStateChangeHandler(state) {
        const receiverData = { ...this.state.receiverAddress };
        receiverData.state= state;
        this.setState({ receiverAddress: receiverData });
    };
    weightChangeHandler(value) {
        this.setState( {
            weight: value
        }, () => this.shippingCost());
    };
    shippingOptionChangeHandler(value) {
        this.setState({ shippingOption: value }, () => this.shippingCost());
    };

    nextHandler() {
         const { weight, shippingOption, currentStep } = this.state;
         if( (currentStep === 3 && !weight > 0) || (currentStep === 4 && !shippingOption > 0)) {
            this.setState({
                errorMsg: 'Please enter valid amount'
            })
         } else {
        this.setState({ currentStep: currentStep + 1, errorMsg: '' })
        }
    };
    prevHandler() {
        const currentStep = this.state.currentStep;
        this.setState({ currentStep: currentStep - 1 })
    };
    shippingCost(name, val) {
        const shippingRate = 0.40;
        const ShippingOption = {
            ground: 1,
            priority: 2
        }
        const { weight, shippingOption} = this.state;
        const shippingCost = weight * shippingRate *
        (shippingOption === ShippingOption.ground ? 1 : 1.5);
        this.setState({
            shippingCost
        })
    }
    render() {

        return (
            <div className="wizard container">
                <h3 className=""> Shipping Label Maker </h3>
                <div className="progress">
                <progress className="col-lg-12"
                    value={this.state.currentStep * 20}
                    max="100" />
                </div>
                
                <Steps currentStep={this.state.currentStep}
                    senderAddress={this.state.senderAddress}
                    receiverAddress={this.state.receiverAddress}
                    weight={this.state.weight}
                    shippingOption={this.state.shippingOption}
                    state={this.state}

                    senderNameChangeHandler={this.senderNameChangeHandler}
                    senderStreetChangeHandler={this.senderStreetChangeHandler}
                    senderZipChangeHandler={this.senderZipChangeHandler}
                    senderCityChangeHandler={this.senderCityChangeHandler}
                    senderStateChangeHandler = {this.senderStateChangeHandler}

                    receiverNameChangeHandler={this.receiverNameChangeHandler}
                    receiverStreetChangeHandler={this.receiverStreetChangeHandler}
                    receiverZipChangeHandler={this.receiverZipChangeHandler}
                    receiverCityChangeHandler={this.receiverCityChangeHandler}
                    receiverStateChangeHandler={this.receiverStateChangeHandler}

                    weightChangeHandler={this.weightChangeHandler}
                    shippingOptionChangeHandler={this.shippingOptionChangeHandler}
                />
                <footer className="action-handlers">
                    <button className="btn btn-primary"
                        disabled={this.state.initStep === this.state.currentStep}
                        onClick={this.prevHandler}>
                        Prev
                    </button>
                    <button className="btn btn-primary"
                        disabled={this.state.lastStep === this.state.currentStep}
                        onClick={this.nextHandler}>
                        Next
                    </button>
                </footer>
            </div>
        );
    }
}

export default ShippingLabelMaker;