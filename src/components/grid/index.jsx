import React from 'react';
import { Card} from 'semantic-ui-react';
import ProjectCard from '../projectCard';

export default () => {
    return (
        <Card.Group itemsPerRow={3}>            
            <ProjectCard ProjectTitle = "Project A" />
            <ProjectCard ProjectTitle = "Project B"/>
            <ProjectCard ProjectTitle = "Project C"/>
            <ProjectCard ProjectTitle = "Project D"/>
            <ProjectCard ProjectTitle = "Project E"/>
            <ProjectCard ProjectTitle = "Project F"/>
        </Card.Group>
    )
}