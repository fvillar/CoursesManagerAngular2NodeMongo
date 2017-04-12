import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private _servicesService: ServicesService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this._servicesService
      .getCourses()
      .then(courses => this.courses = courses);
  }

  deleteCourse(id: number) {    
    this._servicesService
      .deleteCourse(id)
      .then( () => this.getCourses() )
  }

}
