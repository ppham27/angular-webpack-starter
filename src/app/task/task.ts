import {Injectable, Inject, forwardRef, OpaqueToken} from '@angular/core';
import {TaskService} from './task.service';
import {Observable} from 'rxjs/Observable';

export const TASK_USER_TOKEN = new OpaqueToken('TaskUser');

let id: number = 0;

@Injectable()
export class Task {
  readonly id: number;

  constructor(@Inject(forwardRef(() => TaskService)) private readonly taskService: TaskService,
              @Inject(TASK_USER_TOKEN) readonly user: string) {
    this.id = ++id;
  }

  getDescription(): Observable<string> {
    return this.taskService.describe(this);
  }
}
