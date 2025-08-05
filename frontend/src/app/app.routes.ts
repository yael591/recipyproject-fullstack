import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { AddRecipyComponent } from './components/add-recipy/add-recipy.component';

export const routes: Routes = [
    {path:"myHome",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"resinger",component:RegistrationComponent},
    {path:"moreDetails/:_id",component:MoreDetailsComponent},
    {path:"addRecipy",component:AddRecipyComponent},
    {path:"**",component:HomeComponent}
];
