import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { 
        path: '', 
        component: MainLayoutComponent,
        children: [
            {

            }
        ] 
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MainLayoutRoutingModule{}