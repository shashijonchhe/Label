import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from './Wizard';
import ShippingLabelMaker from './../features/shipping-lable-maker/ShippingLabelMaker';

configure({adapter: new Adapter()});

describe("<Wizard/>", () => {

    let props;
    let wrapper;

beforeEach( () => {
    wrapper = shallow(<Wizard {...props} />);
});

it('render ShippingLabelMaker without crashing', () => {
    wrapper = shallow(<Wizard />);
    expect(wrapper.find(ShippingLabelMaker).length).toEqual(1);
});
});