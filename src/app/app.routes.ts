import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';

export const routes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: 'new', component: TodoTemplateDrivenFormComponent },
    { path: 'signin', component: TodoReactiveFormComponent },
    { path: '', redirectTo: '/todos', pathMatch: 'full' }
];