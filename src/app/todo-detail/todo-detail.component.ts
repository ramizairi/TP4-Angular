import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  imports: [FontAwesomeModule, CommonModule],

})
export class TodoDetailComponent {
  @Input() todo: Todo | null = null;
  @Output() close = new EventEmitter<void>();
  faCheck = faCheck;
  toggleDone(): void {
    if (this.todo) {
      this.todo.done = !this.todo.done;
    }
  }

  closeModal(): void {
    this.close.emit(); 
  }
  
}