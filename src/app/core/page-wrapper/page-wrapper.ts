import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-page-wrapper',
  imports: [Header],
  templateUrl: './page-wrapper.html',
  host: {
    class: 'block relative'
  }
})
export class PageWrapper {}
