import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]'
})
export class AppNoCharacterInputDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/\d/g, '');
  }
}

