import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./header/contact-us/contact-us.component";
import {ContentComponent} from "./content/content.component";
import {LabelsComponent} from "./header/labels/labels.component";


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ContentComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'labels', component: LabelsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
