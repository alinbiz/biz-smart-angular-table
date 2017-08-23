import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mandatoryColumns'
})
@Injectable()
export class MandatoryColumnsPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.mandatory);
    }
}