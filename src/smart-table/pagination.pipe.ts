import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pagination',
    pure: false
})
@Injectable()
export class PaginationPipe implements PipeTransform {
    transform(items: any[], pageSize: number, pageNumber: number): any {
        return items.slice(pageNumber*pageSize, pageNumber*pageSize + pageSize);
    }
}