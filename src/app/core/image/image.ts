import { booleanAttribute, Component, ElementRef, input, viewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-image',
  imports: [MatIconButton, MatIcon],
  templateUrl: './image.html',
  host: {
    class: 'relative',
  },
})
export class Image {
  public readonly src = input.required<string>();
  public readonly alt = input<string>();

  protected readonly imageEl = viewChild<ElementRef<HTMLImageElement>>('image');

  protected async enterFullscreen() {
    await this.imageEl()!.nativeElement.requestFullscreen();
  }
}
