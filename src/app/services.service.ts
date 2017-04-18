import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import Course from './models/course';
import Author from './models/author';
import Login from './models/login';

@Injectable()
export class ServicesService {
  private url = 'http://localhost:7777';
  public username = '';
  public token = '';

  constructor(private http: Http) { }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string){
    this.username = username;
  }

  getToken(): string {
    return this.token;
  }

  setToken(newToken: string){
    this.token = newToken;
  }

  //////////////////////
  // Async Functions  //
  //////////////////////

  getCourses(): Promise<Course[]> {
    return this.http.get(`${this.url}/courses?username=${this.getUsername()}`, { headers: this.getHeaders() })
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  getCourse(id: number): Promise<Course> {
    return this.http.get(`${this.url}/courses/${id}`, { headers: this.getHeaders() })
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

  login(login: Login): Promise<Login> {    
    return this.http
      .post(`${this.url}/users`, login)
      .toPromise()
      .then(response => response.json() as Login)
      .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer '+this.token)
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
