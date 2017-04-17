import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ServicesService } from '../services.service';
import  Course  from '../models/course';
import Author from '../models/author';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  course: Course;
  authors: Author[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _servicesService: ServicesService) { }

  ngOnInit() {
    // this.course = {
    //   Id: 0,
    //   title: '',
    //   authorName: '',
    //   authorId: 0,
    //   length: '',
    //   category: '',
    //   username: ''
    // }

    this.course = new Course(0,'',0,'','', this._servicesService.getUsername());

    // Get the Authors
    this._servicesService
      .getAuthors()
      .then(authors => this.authors = authors);
  }

  gotoCoursesList() {
    // let link = ['/courses'];
    // this.router.navigate(link);
    window.history.back();
  }

  addCourse() {
    this._servicesService
      .addCourse(this.course)
      .then(() => this.gotoCoursesList())
  }
}
