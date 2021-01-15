import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectBlock from '../components/ProjectBlock';

const ProjectPage = () => (
  <>
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="Fate App"
          stacks="React, NodeJS, Express, Socket.io, MongoDB, Docker"
          gitHubLink="https://github.com/code-4-bread/fate-app"
        >
          Scrum poker tool for agile planning and estimating efforts, written with React and NodeJS backend.
        </ProjectBlock>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="Medigram"
          stacks="Python, Flask, Sqlite3"
          gitHubLink="https://github.com/code-4-bread/Medigram"
        >
          Courier from Medium to telegram to send an update whenever
          specified author publish new article.
        </ProjectBlock>
      </Grid>
    </Grid>
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="HackerNews Feed Reader"
          stacks="Python, MongoDB"
          gitHubLink="https://github.com/code-4-bread/Hacker-News-RSS-Feed-Reader"
        >
          Read HackerNews RSS feed with CLI features to read and open up in system default browser.
        </ProjectBlock>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="Tic Tac Toe"
          stacks="Java"
          gitHubLink="https://github.com/code-4-bread/TicTacToe"
        >
          CLI Tic Tac Toe game written in Java with scoreboard for multiplayer.
        </ProjectBlock>
      </Grid>
    </Grid>
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="Email Queue System(POC)"
          stacks="NodeJS, Express, BeeQueue, NodeCron"
          gitHubLink="https://github.com/code-4-bread/email-q-system"
        >
          Implementation of email sending system with queue using BeeQueue and NodeCron.
        </ProjectBlock>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <ProjectBlock
          name="Random Password Generator"
          stacks="Python"
          gitHubLink="https://github.com/code-4-bread/Random-Password-Generator"
        >
          Random password generator with toggle for characters, numbers and custom length setter.
        </ProjectBlock>
      </Grid>
    </Grid>
  </>
);


export default ProjectPage;
