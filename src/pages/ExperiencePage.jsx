import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Styled from 'styled-components';
import ExperienceBlock from '../components/ExperienceBlock';

const StyledPaper = Styled(Paper)`
  width: 200px;
  height: 400px;
  padding: 10%;
`;

const StyledGrid = Styled(Grid)`
  && {
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const ExperiencePage = () => (
  (
    <Grid container justify="center">
      <StyledGrid item>
        <StyledPaper elevation={3}>
          <ExperienceBlock
            companyName="Beautiful.me"
            year="Mar 2017 - Sep 2018"
            companyUrl="https://synagie.com/"
          >
            <Typography variant="subtitle2">
              Implemented new features and maintained an E-commerce business solution that handles
              a large amount of data and provide analytical stats for users.
            </Typography>
            <Typography variant="subtitle2">
              Designed and built localhost internal tool for product
              processing with update system used in multiple sites.
            </Typography>
            <Typography variant="subtitle2">
              Worked on integrations with third-party E-commerce platforms.
            </Typography>
          </ExperienceBlock>
        </StyledPaper>
      </StyledGrid>
      <StyledGrid item>
        <StyledPaper elevation={3}>
          <ExperienceBlock
            companyName="BlueMeg"
            year="Oct 2018 – Feb 2020"
            companyUrl="https://bluemeg.com/"
          >
            <Typography variant="subtitle2">
              Worked on digitized incorporation (SaaS) applications that provides a detail
              information of users&apos; company and related documents, also with a ability
              for users to manage their company from a platform.
            </Typography>
            <Typography variant="subtitle2">
              Designed and built a backend system from authentication to RESTful endpoints.
            </Typography>
            <Typography variant="subtitle2">
              Built and manage internal tools on EC2 and provision and manage multiple
              instances of an application using Elastic Beanstalk and S3.
            </Typography>
          </ExperienceBlock>
        </StyledPaper>
      </StyledGrid>
      <StyledGrid item>
        <StyledPaper elevation={3}>
          <ExperienceBlock
            companyName="Biqmind"
            year="Feb 2020 – May 2020"
            companyUrl="https://biqmind.com/"
          >
            <Typography variant="subtitle2">
              Worked on a positioning software which tracks assigned personnel
              and display them on the map on the platform.
            </Typography>
            <Typography variant="subtitle2">
              Worked closely with hardware team and Senior Engineer to provide a
              device updating feature, which will send out new firmware to
              devices and tracks the progress from platform.
            </Typography>
            <Typography variant="subtitle2">
              Implemented new features on both Frontend and Backend using Javascript stacks such as
              React, NodeJS with Prisma ORM.
            </Typography>
          </ExperienceBlock>
        </StyledPaper>
      </StyledGrid>
    </Grid>
  )
);


export default ExperiencePage;
