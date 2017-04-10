import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

export const APP_ROUTES = [
    { path: '', component: CoursesListComponent },
    { path: 'aboutUs', component: AboutUsComponent }
];