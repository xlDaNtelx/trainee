import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, Row, Container, CardLink,
  CardTitle, CardSubtitle, Button, Progress, CardHeader, CardFooter
} from 'reactstrap';
import './stepTemplate.css';
// import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router';

// const stepsService = new StepsService();

class StepTemplate extends Component {
  constructor(props) {
    super(props);
  }

  progressLength(stepNum) {
    return (stepNum + 1) * 33.33
  }

  goPrevHandler = () => {
    const { goPrev } = this.props;
    goPrev();
  }

  goNextHandler = () => {
    const { goNext } = this.props;
    goNext();
  }

  render() {
    const {
      step: Step, currentStep, invalid, stepsLength, title } = this.props;
    //const { invalid, history } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Card className='step-wrapper'>
              <CardHeader className='step-header' tag="h3">{title}</CardHeader>
              <Progress value={this.progressLength(currentStep)} className='step-progress' />
              <CardBody>
                <Step />
              </CardBody>
              {currentStep !== stepsLength - 1 &&
              <CardFooter className='step-footer'>
                {currentStep !== 0
                  && currentStep !== stepsLength - 1
                  && <CardLink className='prev-btn' onClick={this.goPrevHandler}>Back</CardLink>}
                 <CardLink className={`next-btn ${invalid ? 'disabled' : ''}`} onClick={this.goNextHandler} tag="button" disabled={invalid} >Next</CardLink>
              </CardFooter>
              }
            </Card>
          </Row>
        </Container>
      </div>
    )
  }
}

// Steps.defaultProps = {
//   steps: [],
//   invalid: true
// };

export default StepTemplate;