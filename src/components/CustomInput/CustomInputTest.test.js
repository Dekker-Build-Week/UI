import React from 'react';

import CustomInput from './CustomInput';
import renderer from 'react-test-renderer';

describe('Custom Inputs test suite', () => {
    it('Renders the CustomInput correctly', () => {
        const tree = renderer
            .create(<CustomInput> </CustomInput>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
});