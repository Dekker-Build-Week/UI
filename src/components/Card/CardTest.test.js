import React from 'react';

import Card from './Card';
import CardAvatar from './CardAvatar';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardIcon from './CardIcon';
import renderer from 'react-test-renderer';

describe('Card test suite', () => {
    it('Renders the Card correctly', () => {
        const tree = renderer
            .create(<Card></Card>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    }),
    it('Renders the CardAvatar correctly', () => {
        const tree = renderer
            .create(<CardAvatar><p>Hey</p></CardAvatar>)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    }),
    it('Renders the CardBody correctly', () => {
        const tree = renderer
            .create(<CardBody></CardBody>)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    }),
    it('Renders the CardFooter correctly', () => {
        const tree = renderer
            .create(<CardFooter></CardFooter>)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    }),
    it('Renders the CardHeader correctly', () => {
        const tree = renderer
            .create(<CardHeader></CardHeader>)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    }),
    it('Renders the CardIcon correctly', () => {
        const tree = renderer
            .create(<CardIcon></CardIcon>)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    })
});