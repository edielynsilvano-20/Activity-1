import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Integrative-Programming-and-Technologies-2');

  page: 'login' | 'profile' = 'login';

  username = '';
  password = '';

  login() {
    if (this.username && this.password) {
      this.page = 'profile';
    } else {
      alert('Please enter username and password');
    }
  }

  logout() {
    this.page = 'login';
    this.username = '';
    this.password = '';
  }
}