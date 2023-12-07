import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { autenticarGuard } from './seguranca/autenticar.guard';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'admin', component:AdminComponent, canActivate:[autenticarGuard]},
    {path:'', redirectTo:'/login', pathMatch:'full'}
];
