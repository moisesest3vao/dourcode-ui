import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'src/app/model/lesson';
import { LessonService } from 'src/app/service/lesson.service';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.scss']
})
export class ViewLessonComponent implements OnInit {

  lesson:Lesson | undefined;
  code:string | undefined | null;

  constructor(private lessonService: LessonService,
    private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.initFields();
  }
  initFields() {
    this.getLesson();
  }

  getLesson() {
    let id = this.route.snapshot.paramMap.get('id');

    this.lessonService.getById(id).subscribe(data => {
      console.log(data);
      this.lesson = data;
      this.getResource();
    });
  }

  getResource() {
    console.log(this.lesson?.type);

    if(this.lesson?.type == "YT_VIDEO"){
      let url:string | undefined = this.lesson?.resource;

      if(url != undefined){
        this.code = this.getCodeFromUrl(url);
      }
    }
  }



  getCodeFromUrl(url: string){
    console.log(url);

    if(url.startsWith('https://www.youtube.com/watch?v=')){

      let code = url.replace('https://www.youtube.com/watch?v=', '');
      console.log(code);
      return code;

    } else if(url.startsWith('https://youtu.be/')){
      let code = url.replace('https://youtu.be/', '');
      console.log(code);
      return code;
    }
    return null;
  }

  getIFrameUrl(){
    return 'https://www.youtube.com/embed/'+this.code;
  }

}
