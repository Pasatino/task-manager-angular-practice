import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task:any;
  @Output() deleteTask = new EventEmitter<number>();

  onDelete(){
    this.deleteTask.emit(this.task.id);
  }


}
