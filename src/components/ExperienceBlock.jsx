import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledCompanyName = Styled('a')`
  && {
    font-weight:600;
    text-decoration: none;
    color: #3f51b5;
  }
`;

const StyledGrid = Styled(Grid)`
  && {
    margin-top: 4%;
  }
`;


const ExperienceBlock = ({ children, companyName, year }) => (
  <>
    <Grid container justify="flex-start">
      <Grid item>
        <Typography variant="subtitle1">
          <StyledCompanyName href="https://synagie.com" rel="noreferrer" target="_blank">
            {companyName}
          </StyledCompanyName>
        </Typography>
      </Grid>
    </Grid>
    <Grid container justify="flex-start">
      <Grid item>
        <Typography variant="caption">
          (
          {year}
          )
        </Typography>
      </Grid>
    </Grid>
    <StyledGrid container justify="flex-start">
      <Grid item>
        {children}
      </Grid>
    </StyledGrid>
  </>
);


ExperienceBlock.propTypes = {
  children: PropTypes.node.isRequired,
  companyName: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};


export default ExperienceBlock;
