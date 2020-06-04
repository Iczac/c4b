import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Styled from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';

const StyledBox = Styled(Box)`
  margin-left: ${window.innerWidth < 450 ? 0 : '20%'};
  margin-right: ${window.innerWidth < 450 ? 0 : '20%'};
`;

const App = () => {
  const [page, setPage] = useState('aboutme');

  let pageView;

  if (page === 'exp') {
    pageView = <ExperiencePage />;
  } else if (page === 'projects') {
    pageView = <ProjectPage />;
  } else {
    pageView = <MainPage />;
  }

  return (
    <StyledBox>
      <Header setPage={setPage} page={page} />
      {pageView}
    </StyledBox>
  );
};

export default App;
