
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { CanDeactivateModalComponent } from './can-deactivate-modal/can-deactivate-modal.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './app-components/navigation/navigation.component';
import { BannerComponent } from './app-components/banner/banner.component';
import { LoginComponent } from './app-components/login/login.component';
import { LandingComponent } from './app-components/landing/landing.component';
import { NavLinkComponent } from './app-components/nav-link/nav-link.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    LoginComponent,
    LandingComponent,
    NavLinkComponent,
    LoadingComponent,
    CanDeactivateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
