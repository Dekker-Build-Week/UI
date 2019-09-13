import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import clientImage from './bestway.png';
import MyGuys from './myguys.jpg';
import styled from 'styled-components';

const ProjectTile = styled(Card)`
    min-height: 450px;
    max-height: 490px;
    margin : 14px !important;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    width: 60%;
    height: 120px;
`;

const CustomHeader = styled(Card.Header)`
    margin-bottom: 15px;
    font-size: 2.5em !important;
`;

//const customCard = styled(Card)`min-width: 5px;`
class ProjectCard extends React.Component {
    render() {
        return (
            <ProjectTile fluid>
                <Card.Content>
                    <CustomHeader>{this.props.ProjectTitle}</CustomHeader>
                    <Image src={clientImage} floated="right" size="small"></Image>
                    <ImageContainer>
                        <Image src={MyGuys} floated="left" size="small"></Image>
                        <Image src={MyGuys} floated="right" size="small"></Image>
                    </ImageContainer>
                </Card.Content>
            </ProjectTile>
        );
    }
}

export default ProjectCard;