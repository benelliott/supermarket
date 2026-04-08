import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Button } from '../../core/button/button';
import { PageWrapper } from '../../core/page-wrapper/page-wrapper';
import { Prose } from '../../core/prose/prose';
import { ProseHeading } from '../../core/prose-heading/prose-heading';
import { ProseSection } from '../../core/prose-section/prose-section';
import { ProseSubheading } from '../../core/prose-subheading/prose-subheading';

@Component({
  selector: 'app-arthur',
  imports: [Header, Button, PageWrapper, Prose, ProseHeading, ProseSection, ProseSubheading],
  templateUrl: './arthur.html',
})
export class Arthur {}
