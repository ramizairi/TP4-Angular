import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
  faPenToSquare = faPenToSquare;
  faList= faList;
  faTrash = faTrash;
}