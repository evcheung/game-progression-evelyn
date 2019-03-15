import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-header-button',
  template: `
    <button>{{ functionality }}</button>
  `,
  styleUrls: ['./ui-components.component.scss']
})
export class ButtonComponent {

  @Input() functionality: string;

}
