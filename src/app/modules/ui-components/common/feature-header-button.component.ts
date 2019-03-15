import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-header-button',
  template: `
    <a routerLink="{{ routerLink }}">
      <button class="{{ buttonClass }}">{{ functionality }}</button>
    </a>
    `,
  styleUrls: ['./ui-components.component.scss']
})
export class FeatureHeaderButtonComponent {

  @Input() functionality: string;
  @Input() routerLink: string;
  @Input() buttonClass: string;

}
