import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageCategoriesComponent } from './home-page-categories/home-page-categories.component';


@NgModule({
  declarations: [
    FunfactsComponent,
   FooterComponent,
    HeaderComponent,
    HomePageCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CountUpModule,
    CarouselModule,
    

  ],
  exports:[
    FormsModule,
    FunfactsComponent,
    FooterComponent,
    CountUpModule,
    HeaderComponent,
    CarouselModule,
    RouterModule,
    HomePageCategoriesComponent
  ],

})
export class SharedModule { }
