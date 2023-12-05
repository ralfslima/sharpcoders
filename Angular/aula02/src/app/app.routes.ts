import { Routes } from '@angular/router';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';
import { Pg3Component } from './pg3/pg3.component';
import { Pg404Component } from './pg404/pg404.component';

export const routes: Routes = [
    {path:'pg1', component:Pg1Component},
    {path:'pg2', component:Pg2Component},
    {path:'pg3', component:Pg3Component},
    {path:'', redirectTo:'/pg1', pathMatch:'full'},
    {path:'**', component:Pg404Component}
];
