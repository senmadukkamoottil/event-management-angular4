import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): any {
    let sessionDuration = '';
    switch (value) {
      case 1: sessionDuration = 'One hour';
              break;
      case 4: sessionDuration = 'Half day';
              break;
      case 8: sessionDuration = 'A day';
              break;
      case .5: sessionDuration = 'Half an hour';
              break;
    }
    return sessionDuration;
  }

}
