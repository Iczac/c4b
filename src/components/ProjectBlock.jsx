import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Typography, Button,
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import Styled from 'styled-components';

const StyledCardContent = Styled(CardContent)`
  && {
    padding-bottom: 0;
  }
`;

const StyledCardActions = Styled(CardActions)`
  && {
    padding-top: 6px;
  }
`;

const StyledTitle = Styled(Typography)`
  && {
    color: #455a64;
  }
`;


const StyledDescription = Styled(Typography)`
  && {
    color: #455a64;
    margin-bottom: 10px;
  }
`;


const StyledStacks = Styled(Typography)`
  && {
    margin-top: 10px;
    color: #607d8b;
  }
`;

const ProjectBlock = ({
  name, children, stacks, gitHubLink,
}) => (
  <Card variant="outlined">
    <StyledCardContent>
      <StyledTitle variant="h5" gutterBottom>
        {name}
      </StyledTitle>
      <StyledDescription variant="subtitle1">
        {children}
      </StyledDescription>
      <StyledStacks variant="overline">
        {stacks}
      </StyledStacks>
    </StyledCardContent>
    <StyledCardActions>
      <Button size="small" href={gitHubLink} target="_blank" startIcon={<GitHub />}>Github</Button>
    </StyledCardActions>
  </Card>
);


ProjectBlock.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  stacks: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default ProjectBlock;
