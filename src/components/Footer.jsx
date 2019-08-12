import React from 'react';
import {
  Row,
  Col,
  Icon,
  Typography,
} from 'antd';

const { Text } = Typography;

const iconSize = 50;

const gitHubIconStyle = {
  fontSize: iconSize,
  color: '#000000',
};

const linkedInIconStyle = {
  fontSize: iconSize,
  color: '#0077B5',
};

const Footer = () => (
  <Row
    type="flex"
    justify="center"
    style={{
      marginTop: '5%',
      textAlign: 'center',
    }}
  >
    <Col
      span={12}
    >
      <Row
        type="flex"
        justify="center"
      >
        <Col
          span={6}
        >
          <a
            href="https://www.linkedin.com/in/kaung-myat-htet-khaing/"
            target="_blank"
          >
            <Icon
              type="linkedin"
              theme="filled"
              style={linkedInIconStyle}
            />
          </a>
        </Col>
        <Col
          span={6}
        >
          <a
            href="https://github.com/Code4Bread"
            target="_blank"
          >
            <Icon
              type="github"
              theme="filled"
              style={gitHubIconStyle}
            />
          </a>
        </Col>
      </Row>
      <br/>
      <Text>
        &#34;He who has a why to live can bear almost anyhow&#34;
      </Text>
      <br />
      <Text>
        - Friedrich Nietzsche
      </Text>
    </Col>
  </Row>
);

export default Footer;
