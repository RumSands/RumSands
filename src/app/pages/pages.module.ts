import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { HomePageMainBannerComponent } from './home-page/home-page-main-banner/home-page-main-banner.component';
import { SharedModule } from '../shared/shared.module';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SharedService } from '../service/shared.service';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutHomeComponent,
    WhyUsComponent,
    HomePageMainBannerComponent,
    NewCoursesComponent ,
    AllCoursesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  providers: [
    SharedService
  ]
})
export class PagesModule { }
