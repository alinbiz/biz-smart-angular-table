import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterFieldsPipe'
})
@Injectable()
export class FilterFieldsPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        console.log(args);
        return items;
    }
}