import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { BodyComponent } from './body/body.component';

import { DataService } from './service/database.service';
import { ProfileComponent } from './profile/profile.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
