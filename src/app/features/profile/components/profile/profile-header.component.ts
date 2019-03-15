import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  template: `
    <app-feature-header title="My Profile">
      <app-feature-header-button functionality="Edit" routerLink="/my-profile/edit" buttonClass="normal-button"></app-feature-header-button>
    </app-feature-header>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileHeaderComponent {


}
