import React, { Component } from 'react';
import ShippingLabelMaker from './../features/shipping-lable-maker/ShippingLabelMaker';
class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <ShippingLabelMaker />
      </div>
    );
  }
}

export default Wizard;
