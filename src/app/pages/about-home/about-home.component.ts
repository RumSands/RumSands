import { Component } from '@angular/core';
// import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent {
  constructor() { }

  ngOnInit(){
    // this._sharedService.GetAbout();
  }

  Data = {
    title : "Rum Sands Academy" ,
    description : "Rum Sands Academy is a top educational institution offering courses in high-demand fields like multimedia, English, programming, and networking. Committed to quality education, the academy equips students with essential skills to excel in their careers and adapt to the evolving tech world. To meet diverse learning needs, Rum Sands Academy provides flexible options, including in-person classes at modern facilities and online sessions for remote learners. This blended approach ensures accessible, convenient education, catering to various schedules and preferences. Whether students seek to enhance their professional skills, language abilities, or technical expertise, the academy’s comprehensive programs make it a preferred choice for achieving educational goals."
  }
}
