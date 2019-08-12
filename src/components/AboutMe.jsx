import React from 'react';
import { Col, Row, Typography } from 'antd';

const { Paragraph, Title } = Typography;

const paragraphStyle = {
  fontWeight: 500,
  fontSize: '15px',
};

const AboutMe = () => (
  <Row
    type="flex"
    justify="center"
    style={{
      marginTop: '4%',
    }}
  >
    <Col
      span={12}
      style={{
        textAlign: 'center',
      }}
    >
      <Title
        level={3}
        style={{
          marginBottom: 0,
          fontWeight: 500,
        }}
      >
        About Me
      </Title>
      <Paragraph
        style={paragraphStyle}
      >
        I have been working as Software Engineer in Singapore for 3 years now.
        Currently I am working at startup company where I manage and develop
        the backend processes and api development.Our current
        language is Javascript(NodeJS) and stack is MERN.
      </Paragraph>
      <Paragraph
        style={paragraphStyle}
      >
        As I also have experience with other languages such as PHP and Python.
        I find myself as a flexible person who would try any new languages or frameworks.
        Personally, Python and Javascript are my favourite languages so far.
      </Paragraph>
    </Col>
  </Row>
);

export default AboutMe;
