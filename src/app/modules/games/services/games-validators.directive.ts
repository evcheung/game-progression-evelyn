import { ValidatorFn, AbstractControl } from '@angular/forms';

export function aboveZeroValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return control.value <= 0 ? {'aboveZeroError': {value: control.value}} : null;
  };
}

export function aboveEqualZeroValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value < 0 ? { 'aboveEqualZeroError': { value: control.value } } : null;
  };
}
