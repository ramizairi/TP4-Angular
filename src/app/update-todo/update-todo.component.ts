import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
}) 
export class UpdateTodoComponent {
  @Input() todo: Todo = {} as Todo;
  @Output() closeUpdateModal = new EventEmitter<void>();
  @Output() todoUpdated = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {}

  updateTodo(): void {
    this.todoService.updateTodo(this.todo).subscribe({
      next: (updatedTodo) => {
        this.todoUpdated.emit(updatedTodo);
        this.closeUpdateModal.emit();
      },
      error: (err) => {
        console.error('Error updating todo:', err);
        alert('Failed to update the task. Please try again.');
      },
    });
  }
}