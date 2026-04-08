import { Component } from '@angular/core';
import { PageWrapper } from '../../core/page-wrapper/page-wrapper';
import { Prose } from '../../core/prose/prose';
import { ProseSection } from '../../core/prose-section/prose-section';
import { ProseHeading } from '../../core/prose-heading/prose-heading';
import { ProseSubheading } from '../../core/prose-subheading/prose-subheading';
import { Button } from '../../core/button/button';
import { RouterLink } from '@angular/router';
import { OjRender } from '../oj-render/oj-render';

@Component({
  selector: 'app-bella',
  imports: [
    PageWrapper,
    Prose,
    ProseSection,
    ProseHeading,
    ProseSubheading,
    Button,
    RouterLink,
    OjRender,
  ],
  templateUrl: './bella.html',
})
export class Bella {}
