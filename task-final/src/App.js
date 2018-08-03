import React from 'react';
import {
  Card, CardImg, CardText, CardBody, Row, Container, CardLink,
  CardTitle, CardSubtitle, Button, Progress
} from 'reactstrap';


const Example = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
            </CardBody>
            <Progress value={33} />
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
