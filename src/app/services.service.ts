import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './models/course';

@Injectable()
export class ServicesService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCourses(): Promise<Course[]> {
    return this.http.get('http://localhost:7777/courses')
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
