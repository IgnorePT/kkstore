import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'KK Store';

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/cart', icon: 'view_list', title: 'Carrinho' },
  ];

  constructor() {}
}
