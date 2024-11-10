import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'all-courses',
    component : AllCoursesComponent
  },
  {
    path : 'contact',
    component : ContactUSComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
