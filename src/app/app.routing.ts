
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: './login/login.module#LoginModule'},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);