import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ContentComponent} from "./content/content.component";


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ContentComponent },
  { path: 'contactUs', component: ContactUsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
