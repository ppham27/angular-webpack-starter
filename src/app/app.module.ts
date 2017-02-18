import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskService } from './task/task.service';
import { ToggleEditModule } from './common/toggle-edit/toggle-edit.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    ToggleEditModule,
  ],
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  providers: [
    TaskService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
