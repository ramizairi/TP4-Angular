import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-heard-bar',
  templateUrl: './heard-bar.component.html',
  styleUrls: ['./heard-bar.component.css'],
  imports: [CommonModule]
})
export class HeardBarComponent {
  @Output() openTodoFormEvent = new EventEmitter<void>();

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  signin(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }

  openTodoForm(): void {
    this.openTodoFormEvent.emit();
  }
}