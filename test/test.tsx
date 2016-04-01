/// <reference path="../typings/main.d.ts" />
/// <reference path="../bundle.d.ts/main.d.ts" />
import * as React from "react";
import * as chai from "chai";
import {expect} from "chai";
import * as chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

chai.use(chaiEnzyme());

class MyComponent extends React.Component<any, any> {
    render() {
        return (
            <div id="root">
                <h1>Test</h1>
                <span id="child">Child</span>
            </div>
        );
    }
}

let wrapper = shallow(<MyComponent />);

expect(wrapper).to.contain(<h1>Test</h1>);
expect(wrapper.find('span')).to.have.id('child');
expect(wrapper).to.have.descendants('#child');
expect(wrapper).to.have.id("root");
