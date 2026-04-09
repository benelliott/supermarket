import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  host: {
    class: 'block bg-black text-white',
    '[class.-mx-18]': 'bleed()'
  }
})
export class Media {
  public readonly caption = input.required<string>();
  public readonly bleed = input(true, {transform: booleanAttribute});
}
