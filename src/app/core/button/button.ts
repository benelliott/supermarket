import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: '[app-button]',
  imports: [MatIcon],
  templateUrl: './button.html',
  host: {
    class: 'inline-block bg-black text-white font-mono px-3 py-2 hover:bg-yellow-200 hover:text-black',
  },
})
export class Button {}
