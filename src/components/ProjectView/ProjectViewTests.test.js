import React from 'react';

import ANDiPhotoIcon from './ANDiPhotoIcon';
import TechStackIcon from './TechStackIcon';
import ProjectView from './ProjectView';
import ImageSlider from './ImageSlider/ImageSlider';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import renderer from 'react-test-renderer';

describe('ProjectView test suite', () => {
    it('Renders the ProjectView correctly', () => {
        const tree = renderer
            .create(<ProjectView></ProjectView>)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    }),
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
    }),
    it('Renders the ImageSlider successfully', () => {
        const tree = renderer 
            .create(<ImageSlider
                        images = {[]}></ImageSlider>)
                .toJSON();

        expect(tree).toMatchSnapshot(); 
    })
    ,
    it('Renders the VideoPlayer successfully', () => {
        const tree = renderer 
            .create(<VideoPlayer
                        videoSource = ""></VideoPlayer>)
                .toJSON();

        expect(tree).toMatchSnapshot(); 
    })
});