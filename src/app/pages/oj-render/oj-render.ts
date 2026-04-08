import { afterRenderEffect, Component, ElementRef, viewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-oj-render',
  imports: [],
  templateUrl: './oj-render.html',
  host: {
    class: 'block w-full aspect-square',
  }
})
export class OjRender {
  protected readonly canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  constructor() {
    afterRenderEffect(() => {
      const canvas = this.canvasEl()!.nativeElement;
      const app = new Application(canvas);
      app.load('https://prod.spline.design/PRGZHF85FSrbB4Gz/scene.splinecode');
    });
  }
}
