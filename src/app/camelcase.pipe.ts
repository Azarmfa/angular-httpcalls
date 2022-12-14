import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase',
})
export class CamelcasePipe implements PipeTransform {
  transform(value: unknown, ...args: any): any {
    console.log(args[0]);
    return this.toCamelCase(value, args[0]);
  }

  toCamelCase(str: any, space: string) {
    return str
      .split(' ')
      .map(function (word: any, index: Number) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(space);
  }
}
