import { CourseService } from '../../../service/course.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  userCourses: Course[] | undefined;
  constructor(
    private router: Router,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.initFields();
  }

  initFields() {
    this.courseService.getCoursesByUser().subscribe( (data) => {
      this.userCourses = data;
    })
  }

  goToNewCourse(): void {
    this.router.navigate(['/create-course'])
  }

  goToCourse(indexCourse:number){
    let id:any = this.userCourses != undefined ? this.userCourses[indexCourse].id : undefined;

    this.router.navigate([`/course/${id}`])
  }

  goToLesson(indexCourse:number, indexLesson:number){

  }

}
