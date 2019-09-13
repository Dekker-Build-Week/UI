import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectCard from '../projectCard';

export default () => {
    return (
        <Grid container columns={3}>
        <Grid.Column>
          <ProjectCard />
        </Grid.Column>
        <Grid.Column>
            <ProjectCard />
        </Grid.Column>
        <Grid.Column>
            <ProjectCard />
        </Grid.Column>
        <Grid.Column>
            <ProjectCard />
        </Grid.Column>
        <Grid.Column>
            <ProjectCard />
        </Grid.Column>
        <Grid.Column>
            <ProjectCard />
        </Grid.Column>
      </Grid>
    )
}