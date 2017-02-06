import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskService } from './task/task.service';

@NgModule({
  imports: [
    BrowserModule
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
