import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import ProjectTile from "components/ProjectTile/ProjectTile.js";

export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <ProjectTile />
      </GridContainer>
    </div>
  );
}
