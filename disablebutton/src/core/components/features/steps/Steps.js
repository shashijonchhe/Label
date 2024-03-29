import React, { Component } from 'react';
import SenderAddress from './SenderAddress';
import ReceiverAddress from './ReceiverAddress';
import GetWeight from './GetWeight';
import GetShippingOption from './GetShippingOption';
import Confirm from './Confirm';
class Steps extends Component {
    render() {
        console.log(this.props, '::props')
        switch (this.props.currentStep) {
            case 1:
                return <SenderAddress
                    senderAddress={this.props.senderAddress}
                    senderNameChangeHandler={this.props.senderNameChangeHandler}
                    senderStreetChangeHandler={this.props.senderStreetChangeHandler}
                    senderZipChangeHandler={this.props.senderZipChangeHandler}
                    senderCityChangeHandler={this.props.senderCityChangeHandler}
                    senderStateChangeHandler={this.props.senderStateChangeHandler}
                />;
            case 2:
                return <ReceiverAddress
                    receiverAddress={this.props.receiverAddress}
                    receiverNameChangeHandler={this.props.receiverNameChangeHandler}
                    receiverStreetChangeHandler={this.props.receiverStreetChangeHandler}
                    receiverZipChangeHandler={this.props.receiverZipChangeHandler}
                    receiverCityChangeHandler={this.props.receiverCityChangeHandler}
                    receiverStateChangeHandler={this.props.receiverStateChangeHandler}
                />;
            case 3:
                return <GetWeight weight={this.props.weight}
                    errorMsg = {this.props.state.errorMsg}
                    weightChangeHandler={this.props.weightChangeHandler}
                />;
            case 4:
                return <GetShippingOption shippingOption={this.props.shippingOption}
                  errorMsg = {this.props.state.errorMsg}
                    shippingOptionChangeHandler={this.props.shippingOptionChangeHandler}
                />;
            case 5:
                return <Confirm data={this.props.state} />;
            default:
                return <SenderAddress />;
        }
    }
}

export default Steps;
