import React from 'react';

import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button test suite', () => {
    it('Renders the Button correctly', () => {
        const tree = renderer
            .create(<Button><p>Test</p></Button>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
});