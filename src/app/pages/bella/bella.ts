import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { PageWrapper } from '../../core/page-wrapper/page-wrapper';
import { Prose } from '../../core/prose/prose';
import { ProseSection } from '../../core/prose-section/prose-section';
import { ProseHeading } from '../../core/prose-heading/prose-heading';
import { ProseSubheading } from '../../core/prose-subheading/prose-subheading';
import { Button } from '../../core/button/button';

@Component({
  selector: 'app-bella',
  imports: [PageWrapper, Prose, ProseSection, ProseHeading, ProseSubheading, Button],
  templateUrl: './bella.html',
})
export class Bella {}
