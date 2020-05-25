import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Tabs, Tab,
} from '@material-ui/core';
import Styled from 'styled-components';

const StyledGrid = Styled(Grid)`
  margin-top: 2%;
  margin-bottom: 3%;
`;

const StyledHeader = Styled(Typography)`
  && {
    font-weight: 400;
  }
`;

const Header = ({ setPage, page }) => (
  <>
    <Grid container justify="center">
      <Grid item>
        <StyledHeader variant="h2" align="center">
          Code4Bread
        </StyledHeader>
        <Typography variant="h5" align="center">
          A Pragmatic Developer
        </Typography>
      </Grid>
    </Grid>
    <StyledGrid container justify="center">
      <Grid item>
        <Tabs
          value={page}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Experiences" value="exp" onClick={() => { setPage('exp'); }} />
          <Tab label="About me" value="aboutme" onClick={() => { setPage('aboutme'); }} />
          <Tab label="Projects" value="projects" onClick={() => { setPage('projects'); }} />
        </Tabs>
      </Grid>
    </StyledGrid>
  </>
);


Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};


export default Header;
