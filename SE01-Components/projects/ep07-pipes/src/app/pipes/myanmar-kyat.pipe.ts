import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Ks'
})
export class MyanmarKyatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
