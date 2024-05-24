import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  private translations: { [key: string]: { [lang: string]: string } } = {
    hello: { en: 'Hello', tr: 'Merhaba' },
    goodbye: { en: 'Goodbye', tr: 'Hoşça kal' },
    
  };

  transform(value: string, lang: string): string {
    return this.translations[value]?.[lang] || value;
  }
}

