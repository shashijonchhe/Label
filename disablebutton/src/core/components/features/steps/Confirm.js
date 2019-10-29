import React, { Component } from 'react';

class Confirm extends Component {
    render() {
        const { senderAddress, receiverAddress, weight, shippingOption, shippingCost } = this.props.data;
        return (
            <div className="Confirm">
                <div> <strong className="head-line">Sender Details</strong></div>
                <div><span>Sender name:</span> {senderAddress.name} </div>
                <div><span>Sender Street:</span> {senderAddress.street} </div>
                <div><span>Sender zip:</span> {senderAddress.zip} </div>
                <div> <strong className="head-line">Receiver Details</strong></div>
                <div><span>Sender name:</span> {receiverAddress.name} </div>
                <div><span>Sender Street:</span> {receiverAddress.street} </div>
                <div><span>Sender zip:</span> {receiverAddress.zip} </div>
                <div>
                    <strong className="head-line">Weight: {weight}</strong>
                </div>
                <div>
                    <strong className="head-line">Shipping-option: {shippingOption}</strong>
                </div>
                <div>
                    <strong className="head-line">Shipping-cost: {shippingCost.toFixed(2)}</strong>
                </div>
            </div>
        );
    }
}

export default Confirm;
