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
    const field = {...this.allFields[name]};
    field.dirty = true;
    field.focused = true;
    this.allFields[name] = {...field };
    this.allFields = this.validateFields(this.allFields);
    this.validateForm(this.allFields);
  }

  onChange(name, value) {
    const field = { ...this.allFields[name] };
    field.value = value;
    this.update(name, value);
    const fields = this.validateFields({ ...this.allFields, [name]: field });
    this.validateForm(fields);
  }

  onBlur(name) {
    const field = {...this.allFields[name]};
    field.focused = false;
    this.allFields[name] = {...field};
    this.allFields = this.validateFields(this.allFields);
    this.validateForm(this.allFields);
  }

  onSubmit() {
    const fields = {};
    Object.entries(this.allFields).forEach(([name]) => {
      const field = {...this.allFields[name]};
      field.dirty = true;
      fields[name] = field;
    });
    this.allFields = this.validateFields(fields);
    this.validateForm(this.allFields);
    if (this.isValid(this.allFields)) {
      console.log('The form was sent');
    }
  }

  update(name, value) {
    const fields = this.getFields();
    fields[name].value = value;
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