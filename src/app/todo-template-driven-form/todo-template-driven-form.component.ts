import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css'],
  imports: [FormsModule, CommonModule],

})
export class TodoTemplateDrivenFormComponent {
  @Output() todoAdded = new EventEmitter<Todo>();
  showForm: boolean = false;

  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    done: false
  };

  constructor(private todoService: TodoService) {}

  onSubmit(todoForm: any): void {
    if (todoForm.valid) {
      this.todoService.addTodo(this.todo).subscribe({
        next: (newTodo) => {
          this.todoAdded.emit(newTodo);
          this.closeForm();
        },
        error: (err) => {
          console.error('Error adding todo:', err);
          alert('Failed to add the task. Please try again.');
        }
      });
    }
  }

  formVisible: boolean = false;

  openForm(): void {
    this.formVisible = true;
  }

  closeForm(): void {
    this.formVisible = false;
  }
}
