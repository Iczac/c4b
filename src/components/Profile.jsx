import React from 'react';
import {
  Col,
  Row,
  Typography,
} from 'antd';

const { Title } = Typography;

const Profile = () => (
  <Row
    type="flex"
    justify="center"
    style={{
      marginTop: '2%',
    }}
  >
    <Col
      span={12}
      style={{
        textAlign: 'center',
      }}
    >
      <Title
        style={{
          marginBottom: 0,
          fontWeight: 700,
        }}
      >
        Code4Bread
      </Title>
      <Title
        level={4}
        style={{
          marginTop: 0,
          fontWeight: 500,
        }}
      >
        Pragmatic Developer
      </Title>
    </Col>
  </Row>
);

export default Profile;
