import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { MandatoryColumnsPipe } from './smart-table/mandatory-columns.pipe'
import { FilterFieldsPipe } from './smart-table/filter-fields.pipe'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SmartTableComponent, MandatoryColumnsPipe, FilterFieldsPipe],
  imports: [CommonModule, Ng2Bs3ModalModule, FormsModule],
  exports: [SmartTableComponent, MandatoryColumnsPipe, FilterFieldsPipe]
})
export class BizSmartAngularTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BizSmartAngularTableModule
    };
  }
}
