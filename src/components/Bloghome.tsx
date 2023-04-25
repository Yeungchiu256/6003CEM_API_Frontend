import Recat from 'react';
import { Card, Row, Col } from 'antd'

const Bloghome = () => {
  return(
  <>
    <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
  </>
  )

}

export default Bloghome;