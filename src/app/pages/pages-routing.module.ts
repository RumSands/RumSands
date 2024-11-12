import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryCoursesComponent } from './category-courses/category-courses.component';

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
  {
    path : 'about-us',
    component : AboutUsComponent
  },
  { path: 'categorycourses/:categoryid' ,
    component : CategoryCoursesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
