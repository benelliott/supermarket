import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIcon, RouterLinkActive],
  templateUrl: './home.html',
})
export class Home {
  protected readonly links = [
    {
      name: 'Perspective 1: Bella',
      route: '/bella',
    },
    {
      name: 'Perspective 2: Arthur',
      route: '/arthur',
    },
    {
      name: 'Perspective 3: Daria',
      route: '/daria',
    },
  ];
}
