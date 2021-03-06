import { ExactPath } from './../../types/types';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent  {
  @Input() path!: string;
  @Input() exactPathMatch: ExactPath  = {exact: false};
  constructor() { }
}


