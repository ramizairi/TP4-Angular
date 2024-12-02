import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class TodoReactiveFormComponent {
  authForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      const { login, password } = this.authForm.value;
      this.authService.login(login, password).subscribe((success) => {
        if (success) {
          this.isLoggedIn = true;
          alert('Authentication successful!');
          this.router.navigate(['/todos']);
        } else {
          alert('Invalid login or password!');
        }
      });
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    alert('You have been logged out.');
    this.router.navigate(['/login']);
  }
}
