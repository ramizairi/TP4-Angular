import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo';

@Pipe({
  name: 'todo',
})
export class TodoPipe implements PipeTransform {
  transform(todos: Todo[]): Todo[] {
    const today = new Date().getTime();
    const twoDays = 2 * 24 * 60 * 60 * 1000;

    return todos.map((todo) => {
      const dueDate = new Date(todo.date).getTime();
      if (dueDate - today <= twoDays) {
        return { ...todo, highlight: true };
      }
      return { ...todo, highlight: false };
    });
  }
}
