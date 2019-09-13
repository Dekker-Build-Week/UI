import React from 'react';
import { Grid, Card} from 'semantic-ui-react';
import ProjectCard from '../projectCard';

export default () => {
    return (
        <Card.Group itemsPerRow={3}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </Card.Group>
    )
}