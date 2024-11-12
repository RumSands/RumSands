import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.component.html',
  styleUrls: ['./category-courses.component.scss']
})
export class CategoryCoursesComponent {
  constructor(private route: ActivatedRoute,public _sharedService: SharedService, 
    private router: Router ,private viewportScroller: ViewportScroller
    ) { }

  
  id : any = 0;
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);

    this.route.params.subscribe(params => {
      
      this.id = +params?.['categoryid'];
      
      // this._sharedService.GetAllCoursesByCategoryId(this.id);
      this.getAllCourses(this.id);
    
    });

}

allcourses: any[] | undefined;

getAllCourses(id: any) {
  this.allcourses = this._sharedService.courses
    .filter(course => course.categoryid === id)
    .map(course => {
      return {
        ...course,
        categoryName: this._sharedService.categories.find(cat => cat.categoryid === course.categoryid)?.categoryname
      };
    });
}

 searchText : string = '';
selectedSortOption: string = 'default';

Search(){

  if (this.searchText == ''){
    this.allcourses = this._sharedService.courses.filter(course => course.categoryid === this.id);
  }
  else {
    this.allcourses = this._sharedService.courses.filter((x:any)=> x.coursename.toUpperCase().includes(this.searchText.toUpperCase()) &&
    x.categoryid === this.id);

  }
}


}
