import React from 'react';

import ANDiPhotoIcon from './ANDiPhotoIcon';
import TechStackIcon from './TechStackIcon';
import renderer from 'react-test-renderer';

describe('ProjectTile test suite', () => {
    it('Renders the ANDiPhotoIcon correctly', () => {
        const tree = renderer
            .create(<ANDiPhotoIcon
                ANDiPhoto = "Photo"></ANDiPhotoIcon>)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    }),
    it('Renders a TechStackIcon with GridItems correctly', () => {
        const tree = renderer 
            .create(<TechStackIcon
                        techStack = "Stack"></TechStackIcon>)
                .toJSON();

        expect(tree).toMatchSnapshot(); 
    })
});