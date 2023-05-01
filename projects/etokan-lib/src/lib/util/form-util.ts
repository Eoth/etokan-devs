import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Bean, Class, Function1 } from "./custom-type";
import { ObjectU } from "./object-util";

type FieldOperator = 'INCLUDE' | 'EXCLUDE';
type InitValidator = 'REQUIRED' | 'OPTIONAL';

class FieldsOptions {
  fieldsNames: string[] = [];
  operator: FieldOperator = 'EXCLUDE';
  constructor(fieldNames: string[], operator: FieldOperator) {
    this.fieldsNames = fieldNames;
    this.operator = operator;
  }
}

export class Optional<T extends Bean> {
  initBean: T | undefined = undefined;
  fieldsOptions: FieldsOptions = new FieldsOptions([], 'EXCLUDE');
  nonRequiredField: string[] = [];
  constructor(initBean?: T, fieldsOptions?: FieldsOptions, nonRequiredField?: string[]) {
    this.initBean = initBean;
    this.fieldsOptions = fieldsOptions ?? this.fieldsOptions;
    this.nonRequiredField = nonRequiredField ?? this.nonRequiredField;
  }
}

/**
 * Utility class to manage the current operations of the forms
 */
export class FormU {

  static classToFormGroup<T extends Bean>(clazz: Class<T>, optional?: Optional<T>): FormGroup {
    const bean: T = ObjectU.orElse(optional?.initBean, new clazz());
    const formgroup = new FormGroup({});
    const fieldsNames: Array<string> = Object.keys(bean);
    if (ObjectU.exist(optional)) {
      const fieldsOptions = optional.fieldsOptions;
      optional.initBean = ObjectU.orElse(optional.initBean, bean);
      fieldsNames.forEach((fieldName) => {
        applyOptionBeforAddControl<T>(
          formgroup, fieldName, optional, bean, choicePredicateToApply(fieldsOptions)
        )
      });
    } else {
      fieldsNames.forEach((fieldName) => addControl<T>(formgroup, bean, fieldName, 'REQUIRED'));
    }
    return formgroup;
  }

}

function choicePredicateToApply(fieldsOptions: FieldsOptions): Function1<string, boolean> {
  return fieldsOptions.operator === 'INCLUDE'
    ? s => fieldsOptions.fieldsNames.includes(s)
    : s => !fieldsOptions.fieldsNames.includes(s);
}

function applyOptionBeforAddControl<T extends Bean>(
  formgroup: FormGroup, name: string, optional: Optional<T>,
  bean: T, predicate: Function1<string, boolean>
) {
  if (predicate(name)) {
    const operator: InitValidator = optional.nonRequiredField.includes(name) ? 'OPTIONAL' : 'REQUIRED';
    addControl(formgroup, bean, name, operator);
  }
}

function addControl<T extends Bean>(
  formgroup: FormGroup, bean: T, name: string, required: InitValidator
) {
  const control: FormControl = new FormControl(bean[name]);
  if (required == 'REQUIRED') control.addValidators(Validators.required);
  formgroup.addControl(name, control);
}

