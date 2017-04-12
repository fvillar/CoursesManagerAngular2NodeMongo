import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ServicesService } from './services.service';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { NewCourseComponent } from './new-course/new-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutUsComponent,
    CoursesListComponent,
    FooterComponent,
    CourseComponent,
    NewCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
