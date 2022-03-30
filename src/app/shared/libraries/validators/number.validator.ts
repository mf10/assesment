import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Reactive Form
 * Custom Validators
 * for Only Numbers
 */

export function NumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value && !/^[0-9]*$/.test(control.value)) {
      return { notNumber: true };
    }

    return null;
  };
}
