export class FormService {
  constructor() {
    this.allFields = {};
  }

  add(name, options = {type: "text", value: "default"}) {
    this.allFields[name] = options;
  }

  getFields() {
    return this.allFields;
  }

  onFocus(name) {
    this.allFields[name].dirty = true;
    this.allFields[name].focused = true;
    this.allFields = this.validateFields(this.allFields);
    this.validateForm(this.allFields);
  }

  onChange(name, value) {
    this.allFields[name].value = value;
    this.update(name, value);
    this.allFields = this.validateFields(this.allFields);
    this.validateForm(this.allFields);
  }

  onBlur(name) {
    this.allFields[name].focused = false;
    this.allFields = this.validateFields(this.allFields);
    this.validateForm(this.allFields);
  }

  onSubmit() {
    const fields = {};
    Object.entries(this.allFields).forEach(([name]) => {
      this.allFields[name].dirty = true;
    });
    this.allFields = this.validateFields(fields);
    this.validateForm(this.allFields);
    if (this.isValid(this.allFields)) {
      console.log('The form was sent');
    }
  }

  update(name, value) {
    this.allFields[name].value = value;
  }

  validateForm = (fields = this.allFields) => {
    const { password, confirmPassword } = fields;
    if(this.isValid({password, confirmPassword})) {
      if(password.value !== confirmPassword.value){
        const confirmPass = {...fields.confirmPassword};
        confirmPass.errors.push("Passoword and confirm password must be the equil");
        fields.confirmPassword = {...confirmPass};  
      }
    }
    return fields;
  };

  validateFields(fields) {
    Object.entries(fields).forEach(([name, field]) => {
      const { value, validators = [] } = field;
      field.errors = validators
        .map(validator => {
          return validator(value);
        })
        .filter((error) => {
          return error;
        });
    });
    return fields;
  }

  isValid(fields) {
    return Object.entries(fields).every(([_, field]) => {
      return !field.errors.length;
    });
  }

}