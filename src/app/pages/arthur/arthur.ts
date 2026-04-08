import { Component } from '@angular/core';
import { Button } from '../../core/button/button';
import { PageWrapper } from '../../core/page-wrapper/page-wrapper';
import { Prose } from '../../core/prose/prose';
import { ProseHeading } from '../../core/prose-heading/prose-heading';
import { ProseSection } from '../../core/prose-section/prose-section';
import { ProseSubheading } from '../../core/prose-subheading/prose-subheading';
import { RouterLink } from '@angular/router';
import { Image } from '../../core/image/image';

@Component({
  selector: 'app-arthur',
  imports: [
    Button,
    PageWrapper,
    Prose,
    ProseHeading,
    ProseSection,
    ProseSubheading,
    RouterLink,
    Image,
  ],
  templateUrl: './arthur.html',
})
export class Arthur {}
