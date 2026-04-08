import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIcon],
  templateUrl: './home.html',
})
export class Home implements OnDestroy {
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

  constructor() {
    document.body.classList.add('bg-black');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-black');
  }
}
