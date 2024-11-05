import { Component, HostListener } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.scss']
})
export class NewCoursesComponent {
  latestCourses: any[] | undefined;

  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
    this.getLastCourses();
    this.setCharacterLimit(window.innerWidth);
  }

  getLastCourses() {
    this.latestCourses = this._sharedService.courses.slice(-6).map(course => {
      return {
        ...course,
        categoryName: this._sharedService.categories.find(cat => cat.categoryid === course.categoryid)?.categoryname
      };
    });
  }

  characterLimit: number = 170;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setCharacterLimit(event.target.innerWidth);
  }

  setCharacterLimit(width: number): void {
    if (width >= 1400) {
      this.characterLimit = 250;
    } else if (width >= 992 && width < 1400) {
      this.characterLimit = 150;
    } else if (width >= 576 && width < 992) {
      this.characterLimit = 220;
    } else {
      this.characterLimit = 180;
    }
  }
}
