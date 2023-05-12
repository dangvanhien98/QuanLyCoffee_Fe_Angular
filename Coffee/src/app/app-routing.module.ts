import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '',
     component: MainLayoutComponent 
    },
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}