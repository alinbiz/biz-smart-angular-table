import { Component } from '@angular/core';

@Component({
  selector: 'smart-table-demo-app',
  templateUrl: './demo/demo.component.html'
})
export class DemoComponent {

   columnNames = [
      {fieldName: "column1", name: 'Column 1', mandatory: true}, 
      {fieldName: "column2", name: 'Column 2', mandatory: true}, 
      {fieldName: "column3", name: 'Column 3', mandatory: true} , 
      {fieldName: "column4", name: 'Column 4', mandatory: false}
     ];
    columnValues = [{
      column1: "test 1",
      column2: "test 2",
      column3: "test 3",
      column4: "test 4"
    },
    {
      column1: "test 11",
      column2: "test 12",
      column3: "test 13",
      column4: "test 14"
    },
    {
      column1: "test 21",
      column2: "test 22",
      column3: "test 23",
      column4: "test 24"
    }];

    columnNamesChange(columnNames: any[]) {
      this.columnNames = columnNames;
  }
}
