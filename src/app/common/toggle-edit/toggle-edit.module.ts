import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MdButtonModule, MdIconModule} from '@angular/material';

import {ToggleEditComponent} from './toggle-edit.component';
import {FocusWhenDirective} from './focus-when.directive';

@NgModule({
  declarations: [ToggleEditComponent, FocusWhenDirective],
  imports: [CommonModule, MdButtonModule, MdIconModule],
  exports: [ToggleEditComponent, FocusWhenDirective],
  entryComponents: [ToggleEditComponent],
})
export class ToggleEditModule {}
