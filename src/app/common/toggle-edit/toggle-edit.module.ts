import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MdButtonModule, MdIconModule} from '@angular/material';

import {ToggleEditComponent} from './toggle-edit.component';
import {FocusOnEdit} from './focus-on-edit.directive';

@NgModule({
  declarations: [ToggleEditComponent, FocusOnEdit],
  imports: [CommonModule, MdButtonModule, MdIconModule],
  exports: [ToggleEditComponent, FocusOnEdit],
  entryComponents: [ToggleEditComponent],
})
export class ToggleEditModule {}
