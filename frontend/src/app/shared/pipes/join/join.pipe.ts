import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(input: any[] | null, separator: string = ', '): unknown {
    return input?.join(separator);
  }
}
