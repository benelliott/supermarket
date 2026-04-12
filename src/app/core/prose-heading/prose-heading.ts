import { Component } from '@angular/core';

@Component({
  selector: '[app-prose-heading]',
  imports: [],
  templateUrl: './prose-heading.html',
  host: {
    class:
      'text-4xl lg:text-6xl font-[Terminal_Grotesque_Open] text-gray-700 tracking-tight',
  },
})
export class ProseHeading {}
