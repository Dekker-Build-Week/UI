import React from 'react';
import ProjectModal from './ProjectModal';

import renderer from 'react-test-renderer';

describe('Project Modal Test Suite', () => {
    it('Renders the ProjectModal successfully', () => {
        const tree = renderer 
        .create(<ProjectModal><p>Hey</p></ProjectModal>)
            .toJSON();

        expect(tree).toMatchSnapshot();     
    })
})