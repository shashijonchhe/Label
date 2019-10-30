import React, { Component } from 'react';

class Confirm extends Component {
    render() {
        const { senderAddress, receiverAddress, weight, shippingOption, shippingCost } = this.props.data;
        return (
            <div className="Confirm">
                <div> <strong className="head-line">Sender Details</strong></div>
                <div><span>Sender name:</span> {senderAddress.name} </div>
                <div><span>Sender street:</span> {senderAddress.street} </div>
                <div><span>Sender zip:</span> {senderAddress.zip} </div>
                <div><span>Sender city:</span>{senderAddress.city}</div>
                <div><span>Sender state:</span>{senderAddress.state}</div>
                
                <div> <strong className="head-line">Receiver Details</strong></div>
                <div><span>Receiver name:</span> {receiverAddress.name} </div>
                <div><span>Receiver street:</span> {receiverAddress.street} </div>
                <div><span>Receiver zip:</span> {receiverAddress.zip} </div>
                <div><span>Receiver city:</span> {receiverAddress.city} </div>
                <div><span>Receiver state:</span> {receiverAddress.state} </div>
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
