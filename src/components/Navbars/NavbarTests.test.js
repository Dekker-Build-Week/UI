import React from 'react';
import Navbar from './Navbar';

import renderer from 'react-test-renderer';

describe('Navbar Test Suite', () => {
    it('Renders the Navbar successfully', () => {
        const tree = renderer 
        .create(<Navbar><p>Hey</p></Navbar>)
            .toJSON();

        expect(tree).toMatchSnapshot();     
    })
})