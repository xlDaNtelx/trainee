import Link from 'next/link';

import {
  Card, Container, Row, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './pages.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
  <Container>
    <Row>
      <Card className="main-wrapper">
        <CardBody>
          <CardTitle><Button color="primary">Let the stepper begin</Button>{' '}</CardTitle>
        </CardBody>
        <Link href="/signup">
          <CardImg className="start-btn" top width="100%" src="/static/day-one-press-start.gif" alt="Card image cap" />
        </Link>
      </Card>
    </Row>
  </Container>
)

export default Index; 