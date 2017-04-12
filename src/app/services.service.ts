import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './models/course';
import { Author } from './models/author';

@Injectable()
export class ServicesService {
  private url = 'http://localhost:7777';

  constructor(private http: Http) { }

  getCourses(): Promise<Course[]> {
    return this.http.get(`${this.url}/courses`)
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  getCourse(id: number): Promise<Course> {
    return this.http.get(`${this.url}/courses/${id}`)
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }

  getAuthors(): Promise<Author[]> {
    return this.http.get(`${this.url}/authors`)
      .toPromise()
      .then(response => response.json() as Author[])
      .catch(this.handleError);
  }

  updateCourse(course: Course): Promise<Course> {
    return this.http
      .put(`${this.url}/courses/${course.Id}`, course, { headers: this.getHeaders() })
      .toPromise()
      .then(() => course)
      .catch(this.handleError);
  }

  deleteCourse(id: number): Promise<void> {
    return this.http
      .delete(`${this.url}/courses/${id}`, { headers: this.getHeaders() })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  addCourse(course: Course): Promise<Course> {
    return this.http
      .post(`${this.url}/courses`, course, { headers: this.getHeaders() })
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
