import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Styled from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';

const StyledBox = Styled(Box)`
  margin-left: 20%;
  margin-right: 20%;
`;

const App = () => {
  const [page, setPage] = useState('aboutme');

  let pageView;

  if (page === 'exp') {
    pageView = <h1>Hello Exp</h1>;
  } else if (page === 'projects') {
    pageView = <h1>Hello Projects</h1>;
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
