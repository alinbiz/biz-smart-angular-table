import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { MandatoryColumnsPipe } from './mandatory-columns.pipe'
import { FilterFieldsPipe } from './filter-fields.pipe'
import 'jquery';
import 'bootstrap';

@Component({
  selector: 'smart-table',
  providers: [MandatoryColumnsPipe],
  templateUrl: './src/smart-table/smart-table.component.html',
  styleUrls: ['./src/smart-table/smart-table.component.css']
})
export class SmartTableComponent implements OnInit {

  @Input() columnNames: Array<any>;
  @Output() columnNamesChange = new EventEmitter();
  @Input() columnValues: any[] = [];
  

  mandatoryObjectProperties: string[] = [];
   objectProperties: string[] = [];
  stringColumnNames: string[] = [];
  tempColumnNames: any[] = [];
  tempColumnValues: any[] = [];
  showFilters: boolean = false;
  editMode: boolean = false;
  rowIndex: any;
  newColumnValue: any;
  pageSize: number = 2;
  totalItems: number;
  totalPages: number;
  pageNumber: number = 1;
  pages: number[] = [];
  emptyObject: any = {};


  ngOnInit() {
    this.columnNames.forEach(columnName => {
      if (columnName.mandatory) {
        this.stringColumnNames.push(columnName.fieldName);
      }
      columnName.searchText= "";
    });

    this.totalItems = this.columnValues.length;
    this.totalPages = this.getPageNumbers(this.totalItems / this.pageSize);
    for(let i=1; i<= this.totalPages; i++) {
        this.pages.push(i);
    }
   
    this.tempColumnNames = Object.assign([], this.columnNames);

    this.columnValues.forEach(columnValue => {
      for (let property in columnValue) {
        if (this.mandatoryObjectProperties.indexOf(property) <= -1 && this.stringColumnNames.indexOf(property) > -1) {
          this.mandatoryObjectProperties.push(property);
        }
         this.objectProperties.push(property);
      }
    });

    this.objectProperties.forEach(property => {
      this.emptyObject[property] = "";
    });
  }

  getPageNumbers(totalPages: any): number {
    return this.isInt(totalPages) ? totalPages : parseInt(totalPages) + 1
  }

  isInt(n: any) {
   return n % 1 === 0;
  }

  updateTempColumnNames(columnName: any, isMandatory: boolean) {
    this.tempColumnNames
      .filter(cName => cName.fieldName === columnName.fieldName)
      .map(cName => cName.mandatory = isMandatory);
  }

  saveChanges(modal: any) {
    this.columnNames = Object.assign([], this.tempColumnNames);
    this.columnNamesChange.emit(this.columnNames);

    this.mandatoryObjectProperties = [];
    this.stringColumnNames = [];

    this.columnNames.forEach(columnNames => {
      if (columnNames.mandatory) {
        this.stringColumnNames.push(columnNames.fieldName);
      }
    });

    this.columnValues.forEach(columnValue => {
      for (let property in columnValue) {
        if (this.mandatoryObjectProperties.indexOf(property) <= -1 && this.stringColumnNames.indexOf(property) > -1)
          this.mandatoryObjectProperties.push(property);
      }
    });

     this.mandatoryObjectProperties.forEach(property => {
      this.emptyObject.property = null;
    });

    modal.close();
  }

  displayFilters(): void {
    this.showFilters = !this.showFilters;
    if(!this.showFilters) {
      this.columnNames
      .filter(columnName => columnName.searchText)
      .map(columnName => columnName.searchText = "");
    }
  }

  isEditModeOn(item: any): void {
    this.editMode = !this.editMode;
    this.rowIndex = this.columnValues.indexOf(item);
    this.newColumnValue = Object.assign({}, this.columnValues[this.rowIndex]);
  }

  edit(value: any) {
    this.columnValues = this.columnValues.filter(cValue => cValue !== this.newColumnValue);
    this.columnValues[this.rowIndex] = this.newColumnValue;
    this.editMode = false;
  }

  changePropertyValue(property: string, event: any) {
    this.newColumnValue[property] = event;
  }

  delete(columnValue: any) {
    this.columnValues = this.columnValues.filter(cValue => cValue !== columnValue);
    this.totalItems = this.columnValues.length;
    this.totalPages = this.getPageNumbers(this.totalItems / this.pageSize);
    this.pages = [];
    for(let i=1; i<= this.totalPages; i++) {
        this.pages.push(i);
    }
    this.pageNumber = this.totalPages;
  }

  changePage(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.editMode = false;
  }

  addNewRow(): void {
    this.columnValues.push(this.emptyObject);
    this.editMode = true;
    this.rowIndex = this.columnValues.length - 1;
    this.totalItems = this.columnValues.length;
    this.totalPages = this.getPageNumbers(this.totalItems / this.pageSize);
    this.pages = [];
    for(let i=1; i<= this.totalPages; i++) {
        this.pages.push(i);
    }
    this.pageNumber = this.totalPages;
     this.newColumnValue = Object.assign({}, this.columnValues[this.rowIndex]);
  }

  updatePagination() : void {
    this.pageNumber = this.getPageNumbers(this.columnValues.length / this.pageSize); 
  }
}
