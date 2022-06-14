import { User } from './../../../model/user';
import { AccountService } from './../../../account/shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  user: User | undefined;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser():void{
    this.accountService.getSelf().subscribe(data => {
      this.user = data;
    }

    );
  }
}
function data(data: any, arg1: (User: any) => void) {
  throw new Error('Function not implemented.');
}

