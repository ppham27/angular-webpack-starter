import {Injectable, Inject, forwardRef, OpaqueToken} from '@angular/core';
import {TaskService} from './task.service';
import {Observable} from 'rxjs/Observable';

export const TASK_USER_TOKEN = new OpaqueToken('TaskUser');

let id: number = 0;

@Injectable()
export class Task {
  readonly id: number;
  private name: string;

  constructor(@Inject(forwardRef(() => TaskService)) private readonly taskService: TaskService,
              @Inject(TASK_USER_TOKEN) readonly user: string) {
    this.id = ++id;
    this.name = `Task #${this.id}`;
  }
  
  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getDescription(): Observable<string> {
    return this.taskService.describe(this);
  }

  save() {
    console.log('Sending server request to save...');
  }
}
