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

  update(name, value) {
    const fields = this.getFields();
    fields[name].value = value;
  }
}