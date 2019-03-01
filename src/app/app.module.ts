// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment'; // Angular CLI environemnt

// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './root/components/app-header/app-header.component';
import { AppNavComponent } from './root/components/app-nav/app-nav.component';
import { FooterComponent } from './root/components/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GamesComponent } from './features/games/games.component';
import { BodyComponent } from './root/components/body/body.component';

// Feature Modules
import { ProfileModule } from './modules/profile/profile.module';

// ngRx
// import { profileReducer } from './modules/profile/store/profile.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '../app/modules/profile/store/profile.effects';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProfileModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    EffectsModule.forRoot([ProfileEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
