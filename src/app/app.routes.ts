import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES = [
    { path: '', component: LoginComponent },
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses', redirectTo: '', pathMatch: 'full' },
    { path: 'course/:id', component: CourseComponent },
    { path: 'newCourse', component: NewCourseComponent },
    { path: 'aboutUs', component: AboutUsComponent }
];