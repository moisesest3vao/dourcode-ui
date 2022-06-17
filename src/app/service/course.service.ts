import { Course } from 'src/app/model/course';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourse(id: string | null) {
    return this.http.get<Course>(`${environment.apiUrl}/course/${id}`)
  }


  getCoursesByUser(){
    return this.http.get<Course[]>(`${environment.apiUrl}/course`)
  }

}
