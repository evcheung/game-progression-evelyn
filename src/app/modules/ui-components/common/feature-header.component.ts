import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-header',
  template: `
    <div class="feature-header">
      <h2>{{ title }}</h2>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-components.component.scss']
})
export class FeatureHeaderComponent {

  @Input() title: string;

}
