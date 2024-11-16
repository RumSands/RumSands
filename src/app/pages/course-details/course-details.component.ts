import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
constructor(public _sharedService : SharedService , public route: ActivatedRoute, private viewportScroller: ViewportScroller){}

id : any ;
ngOnInit(){
  this.viewportScroller.scrollToPosition([0, 0]);

  this.route.params.subscribe(params => {
      
    this.id = +params?.['courseid'];
    this.getDetailsCourse(this.id);
    this.RandomCourses(this.id);


  });
}

detailscourse: any | undefined;
randomcourses: any[] | undefined;

getDetailsCourse(id: any) {
  this.detailscourse = this._sharedService.courses
    .find(course => course.courseid === id) }

    RandomCourses(id: any) {
      const course = this._sharedService.courses.find(v => v.courseid === id);
    
      if (!course) {
        this.randomcourses = [];
        return;
      }
    
      const sameCategoryCourses = this._sharedService.courses.filter(
        c => c.categoryid === course.categoryid && c.courseid !== id
      );
    
      this.randomcourses = sameCategoryCourses
        .sort(() => Math.random() - 0.5)
        .slice(0, 4); 
    }
    


}


