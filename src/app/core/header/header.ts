import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  host: {
    class: 'flex flex-col gap-3 font-mono lg:py-4',
  },
})
export class Header {
  protected readonly links = [
    {
      name: 'Perspective 1: Bella',
      route: '/bella'
    },
    {
      name: 'Perspective 2: Arthur',
      route: '/arthur'
    },
    {
      name: 'Perspective 3: Daria',
      route: '/daria'
    }
  ];
}
