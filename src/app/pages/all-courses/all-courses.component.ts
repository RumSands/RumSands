import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
  constructor(private route: ActivatedRoute,public _sharedService: SharedService, 
    public dialog: MatDialog,private router: Router , private viewportScroller: ViewportScroller
    ) { }

  
  id : any = 0;
  allcourses: any[] | undefined;

  ngOnInit() {
    this.getLastCourses();
    this.viewportScroller.scrollToPosition([0, 0]);
}

getLastCourses() {
  this.allcourses = this._sharedService.courses.map(course => {
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
    this.allcourses = this._sharedService.courses;
  }
  else {
    this.allcourses = this._sharedService.courses.filter((x:any)=> x.coursename.toUpperCase().includes(this.searchText.toUpperCase()));

  }
}


}
