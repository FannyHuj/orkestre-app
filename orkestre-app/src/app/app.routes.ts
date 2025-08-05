import { Routes } from '@angular/router';
import { ListEvenementComponent } from './pages/list-evenement/list-evenement.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EvenementFormComponent } from './pages/evenement-form/evenement-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { EvenementDetailsComponent } from './pages/evenement-details/evenement-details.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'ShowAllEvenements',
    component: ListEvenementComponent,
  },
  {
    path: 'createEvenement',
    component: EvenementFormComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'SignIn',
    component: SignInComponent,
  },
  {
    path: 'showEvenementDetails/:id',
    component: EvenementDetailsComponent,
  },
  {
    path: 'profilePage',
    component: ProfilePageComponent,
  },
 
];
