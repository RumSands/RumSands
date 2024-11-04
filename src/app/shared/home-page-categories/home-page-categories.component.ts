import { Component, OnInit } from '@angular/core';
 import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-page-categories.component.html',
  styleUrls: ['./home-page-categories.component.scss']
})
export class HomePageCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this._sharedService.GetAllCategories();
  }
  categories = [
	{ categoryid: 1, categoryname: 'English', categoryimg: 'english.jpg' },
	{ categoryid: 2, categoryname: 'IT', categoryimg: 'it.jpeg' },
	{ categoryid: 3, categoryname: 'Multimedia', categoryimg: 'multi.jpg' }
  ];
  

  

  categoriesSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }
}
