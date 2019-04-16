import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default () => (
  <React.Fragment>
    <Row
      type="flex"
      align="middle"
      justify="center"
      style={{
        marginTop: '25%',
      }}
    >
      <Col
        span={12}
        style={{
          textAlign: 'center',
        }}
      >
        <img alt="loader" src="https://loading.io/spinners/dna/index.dna-spin-spiral-preloader.svg" />
        <h4
          style={{
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Construction in progress
        </h4>
      </Col>
    </Row>
  </React.Fragment>
);
