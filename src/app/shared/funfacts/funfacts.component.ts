import { Component } from '@angular/core';
// import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {
  numberOfCategories: number = 3;
numberOfCourses : number  = 22

constructor(){}
ngOnInit(){
// this._sharedService.GetAllTeachers();
// this._sharedService.GetAllCategories();
// this._sharedService.GetAllCourses();
}

}
