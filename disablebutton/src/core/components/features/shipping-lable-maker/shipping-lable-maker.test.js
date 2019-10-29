import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Steps from '../steps/Steps';
import ShippingLabelMaker from './ShippingLabelMaker';

configure({adapter: new Adapter()});

describe("<Shipping-lable-maker/>", () => {

    let props;
    let wrapper;

beforeEach( () => {
    wrapper = shallow(<ShippingLabelMaker {...props} />);
});

it('render steps without crashing', () => {
    expect(wrapper.find(Steps).length).toEqual(1);
});
});