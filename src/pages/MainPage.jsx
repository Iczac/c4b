import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core';
import Styled from 'styled-components';
import Footer from '../components/Footer';
import ProfilePicture from '../profile.jpg';

const StyledAvatar = Styled(Avatar)`
  && {
    width: 130px;
    height: 130px;
  }
`;

const StyledName = Styled(Typography)`
  && {
    margin-top: 5%;
  }
`;

const StyledGridItem = Styled(Grid)`
  && {
    margin-left: 14%;
    margin-right: 14%;
    margin-top: 1%;
  }
`;

const MainPage = () => (
  <>
    <Grid container justify="center">
      <Grid item>
        <StyledAvatar
          src={ProfilePicture}
        />
      </Grid>
    </Grid>
    <Grid container justify="center">
      <Grid item>
        <StyledName variant="h6">
          Kaung Myat Htet Khaing
        </StyledName>
      </Grid>
    </Grid>
    <Grid container justify="center">
      <Grid item>
        <Typography variant="caption">
          Email - iz@kaungmyat.tech
        </Typography>
      </Grid>
    </Grid>
    <Grid container justify="center">
      <StyledGridItem item>
        <Typography variant="subtitle1" align="center">
          Software Engineer with 3+ years of Singapore-based experience developing applications
          for IIoT, e-commerce and digital governance products.
        </Typography>
        <Typography variant="subtitle1" align="center">
          Experienced in building web applications using REST APIs and integration
          with third party services. Has worked on SaaS web apps and real-time data driven
          applications using web-sockets. Skilled in Javascript, NodeJS, Express, Prisma, Socket.io,
          Python, Flask, PHP, Wordpress, MongoDB, MYSQL, AWS, EC2, Elastic Beanstalk, S3.
        </Typography>
      </StyledGridItem>
    </Grid>
    <Footer />
  </>
);

export default MainPage;
