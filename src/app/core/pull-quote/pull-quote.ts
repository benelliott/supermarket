import { Component } from '@angular/core';

@Component({
  selector: '[app-pull-quote]',
  imports: [],
  templateUrl: './pull-quote.html',
  host: {
    class:
      'relative text-3xl lg:text-5xl lg:leading-13 py-8 text-gray-800 tracking-tight text-right text-balance font-[Terminal_Grotesque_Open]',
  },
})
export class PullQuote {}
