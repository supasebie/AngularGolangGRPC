import { Component, input } from '@angular/core';
import { Task } from '../../_shared/models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input<Task | undefined>(undefined);
}
