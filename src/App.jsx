import React from 'react';
// noinspection ES6CheckImport - IDE Error
import PropTypes from 'prop-types';
import './App.css';
import { Row, Col } from 'antd';

class App extends React.PureComponent {
  render() {
    // This prop is added just to solve eslint bug for now
    const {
      name,
    } = this.props;

    return (
      <Row
        type="flex"
        align="middle"
        justify="center"
        style={{
          marginTop: '21%',
        }}
      >
        <Col
          span={12}
          style={{
            textAlign: 'center',
          }}
        >
          <img alt="loader" src="https://loading.io/spinners/dna/index.dna-spin-spiral-preloader.svg" />
          <h4>
            {name}
          </h4>
        </Col>
      </Row>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Construction in progress',
};

export default App;
