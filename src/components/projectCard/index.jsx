import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import clientImage from './bestway.png'
import styled from 'styled-components';



//const customCard = styled(Card)`min-width: 5px;`
class ProjectCard extends React.Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>The Project</Card.Header>
                    <Image src={clientImage} floated="right" size="small"></Image>
                    <Card.Meta>Co-Worker</Card.Meta>
                    <Card.Description>

                    Matthew is a pianist living in Nashville.
                    Matthew is a pianist living in Nashville.
                    Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.
                    Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.
                    Matthew is a pianist living in Nashville.Matthew is a pianist living in Nashville.

                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default ProjectCard;