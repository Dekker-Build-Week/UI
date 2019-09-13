import React from 'react';
import { Card } from 'semantic-ui-react';
import Menu from '../menu';

class ProjectCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>The Project</Card.Header>
                    <Card.Meta>Co-Worker</Card.Meta>
                    <Card.Description>
                    Matthew is a pianist living in Nashville.
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default ProjectCard;