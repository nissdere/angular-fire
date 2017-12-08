import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" routerLink="/news">Fire News</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink="/news">News <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/newsadmin">News Admin</a>
        </li>
      </ul>
    </div>
  </nav>
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
