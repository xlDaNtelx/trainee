import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { require, email, minLength, password, day, year, month, date } from '../../../validators/validators';
import StepField from '../../StepField';
import './otherInfo.css';

class OtherInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentSex: 'male' };
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Field
          id="day"
          validate={[day, date]}
          name="day"
          label=""
          component={StepField}
          type="text"
          customWrapper="step-date"
          maxLength='2'
          placeholder='DD'
          additionalTitle=' '
        />
        <Field
          id="month"
          validate={[month, date]}
          name="month"
          component={StepField}
          type="text"
          customWrapper="step-date"
          maxLength='2'
          placeholder='MM'
          additionalTitle='DATE OF BIRTH'
        />
        <Field
          id="year"
          validate={[year,date]}
          name="year"
          label=''
          component={StepField}
          type="text"
          customWrapper="step-date"
          maxLength='4'
          placeholder='DDDD'
          additionalTitle=' '
        />
        <Field
          id="male"
          name="sex"
          value="MALE"
          defaultValue="MALE"
          label="MALE"
          component={StepField}
          type="radio"
          additionalTitle=' '
          customWrapper="step-sex"
          current={this.state.currentSex === 'male' ? 'current' : ''}
          onClick={() => this.setState({ currentSex: 'male' })}
          checked={true}
        />
        <Field
          id="female"
          name="sex"
          value="FEMALE"
          label="FEMALE"
          component={StepField}
          type="radio"
          additionalTitle='GENDER'
          customWrapper="step-sex"
          current={this.state.currentSex === 'female' ? 'current' : ''}
          onClick={() => this.setState({ currentSex: 'female' })}
        />
        <Field
          id="unspecified"
          name="sex"
          value="UNSPECIFIED"
          label="UNSPECIFIED"
          component={StepField}
          type="radio"
          additionalTitle=' '
          customWrapper="step-sex"
          current={this.state.currentSex === 'unspecified' ? 'current' : ''}
          onClick={() => this.setState({ currentSex: 'unspecified' })}
        />
        <div className='select-wrapper'>
          <span className="select-title">WHERE DID YOU HEAR ABOUT IS?</span>
          <Field
            id="op"
            name="whereFrom"
            component="select"
            label='opp'
            type="select"
          >
            <option />
            <option value="Friend">Friend</option>
            <option value="TV">TV</option>
            <option value="Internet">Internet</option>
            <option value="Radio">Radio</option>
          </Field>
        </div>
      </Fragment>
    )
  }
}



export default OtherInfo;
