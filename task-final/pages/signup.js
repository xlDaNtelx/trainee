import { Component, Fragment } from 'react';
import { reduxForm } from 'redux-form';
import { Form } from 'reactstrap';
import { connect } from 'react-redux';
import StepTemplate from '../components/StepTemplate';
// import StepLayout from '../components/StepLayout';
import MainInfo from '../components/Steps/MainInfo';
import OtherInfo from '../components/Steps/OtherInfo';
import Final from '../components/Steps/Final';
// import { validateDate } from '../validators/validators';

const steps = [
  {
    step: MainInfo,
    title: 'Signup'
  },
  {
    step: OtherInfo,
    title: 'Signup'
  },
  {
    step: Final,
    title: 'Thank you!'
  }
];

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }
  
  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <StepTemplate
          goNext={this.nextStep}
          goPrev={this.prevStep}
          currentStep={this.state.currentStep}
          invalid={this.props.invalid}
          errors={this.props.syncErrors}
          values={this.props.values}
          step={steps[this.state.currentStep].step}
          stepsLength={steps.length}
          title={steps[this.state.currentStep].title}
          >
        </StepTemplate>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'SignUp'
})(SignUp);