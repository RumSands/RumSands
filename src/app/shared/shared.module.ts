import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FunfactsComponent,
   FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CountUpModule
  ],
  exports:[
    FormsModule,
    FunfactsComponent,
    FooterComponent,
    CountUpModule,
    HeaderComponent
  ],

})
export class SharedModule { }
