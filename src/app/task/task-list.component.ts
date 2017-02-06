import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private readonly taskService: TaskService) {}

  ngOnInit() {
    this.taskService.listTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
