import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { Dashboard } from './components/dashboard/dashboard.component';
import { DropdownComponent } from './components/dropdown/drop-down.component';
import { LoginComponent } from './components/login/login.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';


const routes: Routes = [
    {path: 'Dashboard', component: Dashboard},
    {path: 'login', component: LoginComponent},
    {path: 'DropdownComponent', component: DropdownComponent},
    {path: 'CustomDropdownComponent', component: CustomDropdownComponent},
    {path: 'Autocomplete', component: AutocompleteComponent},
    {path: '**', redirectTo: '/Dashboard'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const RoutingComponents = [Dashboard, DropdownComponent, CustomDropdownComponent, LoginComponent, AutocompleteComponent]