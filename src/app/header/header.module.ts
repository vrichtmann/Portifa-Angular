import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgbModule, NgbPaginationModule, NgbAlertModule, NgbModule.forRoot()],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
