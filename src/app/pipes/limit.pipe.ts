import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.slice(args[0], args[1]);
  }

}
