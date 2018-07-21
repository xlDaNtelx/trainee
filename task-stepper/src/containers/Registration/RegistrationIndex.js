import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Row, Col, Button, Container, Badge
} from 'reactstrap';

export class RegistrationIndex extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <Container>
        <Row>
          <Col className='text-center reg-title'>
            <h2>And here we go, start with registration</h2>
          </Col>
        </Row>
        <Row className="reg-form-background">
          <Col>
            <Link to={`${match.path}/stepLogin`} replace><Button color="primary" className="reg-form-start" >Begin</Button></Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RegistrationIndex;