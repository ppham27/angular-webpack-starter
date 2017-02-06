import {Injectable, Injector, ReflectiveInjector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Task, TASK_USER_TOKEN} from './task';

@Injectable()
export class TaskService {
  constructor(private readonly injector: Injector) {}

  listTasks(): Observable<Task[]> {
    const newInjector: ReflectiveInjector =
      ReflectiveInjector.resolveAndCreate([
        {provide: TASK_USER_TOKEN, useValue: 'injected user'},
      ], this.injector);
    const tasks: Task[] = [];
    tasks.push(newInjector.resolveAndInstantiate(Task));
    tasks.push(newInjector.resolveAndInstantiate(Task));
    return Observable.of([new Task(this, 'a'), new Task(this, 'b')].concat(tasks));
  }

  describe(task: Task): Observable<string> {
    // make a server request for the description
    return Observable.of(`This is task #${task.id} for ${task.user}`);
  }
}
