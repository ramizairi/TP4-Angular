import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { CommonModule } from '@angular/common';
import { faList, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoTemplateDrivenFormComponent } from '../todo-template-driven-form/todo-template-driven-form.component';
import { HeardBarComponent } from '../heard-bar/heard-bar.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, TodoDetailComponent, HeardBarComponent, TodoTemplateDrivenFormComponent, UpdateTodoComponent],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;
  faList = faList;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(TodoTemplateDrivenFormComponent) todoFormComponent!: TodoTemplateDrivenFormComponent;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  ngAfterViewInit(): void {
    if (!this.todoFormComponent) {
      console.error('TodoTemplateDrivenFormComponent is not initialized');
    }
  }

  onOpenTodoForm(): void {
    if (this.todoFormComponent) {
      this.todoFormComponent.openForm();
    } else {
      console.error('TodoTemplateDrivenFormComponent is not available');
    }
  }

  loadTodos(): void {
    this.todoService.getTodoList().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id).subscribe({
      next: () => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression du todo :', err);
        alert('Impossible de supprimer la tâche. Veuillez réessayer.');
      },
    });
  }

  displayTodoDetail(todo: Todo): void {
    console.log('Todo clicked:', todo);
    this.selectedTodo = todo;
  }

  closeModal(): void {
    this.selectedTodo = null;
  }

  selectedTodoToUpdate: Todo | null = null;

  
  openUpdateModal(todo: Todo): void {
    this.selectedTodoToUpdate = { ...todo };
  }
  
  
  closeUpdateModal(): void {
    this.selectedTodoToUpdate = null;
  }
  
  
  handleTodoUpdated(updatedTodo: Todo): void {
    const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }
  
}