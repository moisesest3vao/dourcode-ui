import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/ui/sidebar/sidebar.component';
import { NavbarComponent } from './component/ui/navbar/navbar.component';
import { FooterComponent } from './component/ui/footer/footer.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MeComponent } from './component/profile/me/me.component';
import { JwtInterceptor } from './account/shared/jwt.interceptor';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { MyCoursesComponent } from './component/profile/my-courses/my-courses.component';
import { CreateCourseComponent } from './component/profile/create-course/create-course.component';
import { ViewCourseComponent } from './component/view-course/view-course.component';
import { ViewLessonComponent } from './component/view-lesson/view-lesson.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    MeComponent,
    CreateAccountComponent,
    MyCoursesComponent,
    CreateCourseComponent,
    ViewCourseComponent,
    ViewLessonComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
