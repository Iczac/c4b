import React from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { Linkedin, GithubSquare } from '@styled-icons/fa-brands';
import Styled from 'styled-components';

const LinkedInIcon = Styled(Icon)`
  color: #2867B2;
  margin-right: ${() => (window.innerWidth < 450 ? 0 : '100px')};
  && {
    font-size: 5rem;
  }
`;

const GithubIcon = Styled(Icon)`
  color: #211f1f;
  && {
    font-size: 5rem;
  }
`;


const StyledGrid = Styled(Grid)`
  margin-top: 5%;
  margin-bottom: 3%;
`;

const Footer = () => (
  <>
    <StyledGrid container justify="center">
      <Grid item>
        <a href="https://www.linkedin.com/in/kaung-myat-htet-khaing/" rel="noreferrer" target="_blank">
          <LinkedInIcon component={Linkedin} />
        </a>
        <a href="https://github.com/code-4-bread/" rel="noreferrer" target="_blank">
          <GithubIcon component={GithubSquare} />
        </a>
      </Grid>
    </StyledGrid>
    <Grid container justify="center">
      <Grid item>
        <Typography variant="overline">
          &#34;He who has a why to live can bear almost anyhow&#34;
        </Typography>
        <br />
        <Typography variant="caption">
          - Friedrich Nietzsche
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default Footer;
