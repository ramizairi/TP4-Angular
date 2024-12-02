import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map((users) => {
        const user = users.find((u) => u.login === login && u.password === password);
        if (user) {
          localStorage.setItem('authToken', user.token);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
