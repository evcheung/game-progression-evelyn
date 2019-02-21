// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './root/components/app-header/app-header.component';
import { AppNavComponent } from './root/components/app-nav/app-nav.component';
import { FooterComponent } from './root/components/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GamesComponent } from './features/games/games.component';
import { BodyComponent } from './root/components/body/body.component';
import { ProfileComponent } from './features/profile/components/profile/profile.component';
import { ProfileEditComponent } from './features/profile/components/profile-edit/profile-edit.component';

// Services
import { DataService } from './features/profile/service/profile-data.service';

// summarize all components into index.ts file and export all, then import in the [component]module.ts),
// modules (services go in with the features/modules),
// root (root feature)

// features = things that do not consume the same modules
// root feature = header, nav, body, footer, for example

// separate into routing module, and further isolate into thigns such as Dashboard Routing, etc
// explore lazy loading later on in the sections

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    FooterComponent,
    DashboardComponent,
    GamesComponent,
    BodyComponent,
    ProfileComponent,
    ProfileEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
