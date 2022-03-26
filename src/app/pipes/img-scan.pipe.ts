import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgScan',
})
export class ImgScanPipe implements PipeTransform { //! Temporary Diabled for futre use
  transform(value: string): any {
    if (value.includes('gs') || value == '') {
      return (value =
        'https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Apple-devices-launched-in-2021.jpg');
    } else {
      return value;
    }
  }
}
