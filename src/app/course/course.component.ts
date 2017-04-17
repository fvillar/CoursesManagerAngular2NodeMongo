import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import _ from 'lodash';
import 'rxjs/add/operator/switchMap';

import { ServicesService } from '../services.service';
import Course from '../models/course';
import Author from '../models/author';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  authors: Author[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _servicesService: ServicesService) { }

  ngOnInit(): void {
    // Get the course from the URL parameter
    this.route.params
      .subscribe(params => {
        let id = Number.parseInt(params['id']);
        this._servicesService
          .getCourse(id)
          .then(course => { this.course = _.head(course) });
      });

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

  updateCourse() {
    this._servicesService
      .updateCourse(this.course)
      .then(() => this.gotoCoursesList())
  }
}
