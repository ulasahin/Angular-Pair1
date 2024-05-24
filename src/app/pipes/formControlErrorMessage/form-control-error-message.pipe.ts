import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | null, ...args: unknown[]): string {
    if (!errors) return '';

    const errorMessages = {
      required: 'This field is required.',
      minlength: `Minimum length is ${errors['minlength']?.requiredLength}.`,
      maxlength: `Maximum length is ${errors['maxlength']?.requiredLength}.`,
      email: 'Please enter a valid email address.',
      };
      for (const errorKey in errors) {
        if (errorMessages[errorKey]) {
          return errorMessages[errorKey];
        }
      }
      return 'Invalid input.';
  }
}
