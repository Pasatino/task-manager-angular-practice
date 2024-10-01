import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks = [
    { id: 1, name: 'Learn Angular', completed: false },
    { id: 2, name: 'Develop Task Manager App', completed: true }
  ];

  addTask(taskName: string) {
    const newTask = { id: this.tasks.length + 1, name: taskName, completed: false };
    this.tasks.push(newTask);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
