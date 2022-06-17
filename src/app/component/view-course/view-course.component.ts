import { Lesson } from './../../model/lesson';
import { CourseService } from './../../service/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService :CourseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initFields();


  }
  initFields() {
    this.getCourse();
  }
  getCourse() {
    let id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe(data => {
      this.course = data;
    });
  }
  goToLesson(i:any):void{
    i = this.course?.lessonList != undefined ? this.course?.lessonList[i].id : null;

    this.router.navigate([`/lesson/${i}`]);
  }

}
