import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterFieldsPipe',
    pure: false
})
@Injectable()
export class FilterFieldsPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        let records: any[] = [];
        let columnNames: any[] = args;
        let filteredColumnNames = columnNames.filter(column => column.searchText);
        let finded: boolean[] = [];
        if (filteredColumnNames.length > 0) {
            items.filter(item => {
                finded = [];
                for (let columnName of columnNames) {
                    if (columnName.searchText) {
                        if (item[columnName.fieldName].indexOf(columnName.searchText) >= 0) {
                            finded.push(true);
                        } else {
                            finded.push(false);
                        }
                    }
                }
                if (finded.indexOf(false) < 0) {
                    records.push(item);
                }
            });
            items = records;
            return items;
        } else {
            return items;
        }
    }
}