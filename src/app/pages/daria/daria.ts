import { Component } from '@angular/core';
import { Button } from '../../core/button/button';
import { PageWrapper } from '../../core/page-wrapper/page-wrapper';
import { Prose } from '../../core/prose/prose';
import { ProseHeading } from '../../core/prose-heading/prose-heading';
import { ProseSection } from '../../core/prose-section/prose-section';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-daria',
  imports: [
    Button,
    PageWrapper,
    Prose,
    ProseHeading,
    ProseSection,
    RouterLink,
  ],
  templateUrl: './daria.html',
})
export class Daria {}
