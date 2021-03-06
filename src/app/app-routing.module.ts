import { LandingComponent } from './app-components/landing/landing.component';
import { LoginComponent } from './app-components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './services/authorization.guard';



const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    canActivate: [AuthorizationGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
