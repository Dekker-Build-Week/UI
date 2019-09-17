import React from 'react';

import GridContainer from './GridContainer';
import GridItem from './GridItem';
import renderer from 'react-test-renderer';

describe('Grid test suite', () => {
    it('Renders the GridContainer correctly', () => {
        const tree = renderer
            .create(<GridContainer></GridContainer>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    }),
    it('Renders the GridItem correctly', () => {
        const tree = renderer
            .create(<GridItem></GridItem>)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    }),
    it('Renders a GridContainer with GridItems correctly', () => {
        const tree = renderer 
            .create(<GridContainer>
                <GridItem></GridItem>
                </GridContainer>)
                .toJSON();

        expect(tree).toMatchSnapshot(); 
    })
});