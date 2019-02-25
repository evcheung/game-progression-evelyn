import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appHoursValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: HoursValidatorDirective, multi: true}]
})

export class HoursValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    const elementValue = control.value;

    if (elementValue < 0) {
      return {error_belowZero : 'Hours must be above or equal to 0.'};
    } else {
      return null;
    }
  }

}
