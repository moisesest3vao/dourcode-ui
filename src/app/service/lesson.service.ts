import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../model/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {


  constructor(private http: HttpClient) { }

  getById(id: string | null) {
    return this.http.get<Lesson>(`${environment.apiUrl}/lesson/${id}`);
  }
}
