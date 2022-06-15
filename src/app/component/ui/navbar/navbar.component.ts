import { Router } from '@angular/router';
import { AccountService } from './../../../service/account.service';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private accountService:AccountService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.logout();
  }

  goToProfile():void{
    this.router.navigate(['/me']);
  }

  goToLearning():void{
    this.router.navigate(['/learning']);
  }

  goToMyCourses():void{
    this.router.navigate(['/my-courses']);
  }

  toggle() {
    var x = document.getElementById("myTopnav");
    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      if(x != undefined){
        x.className = "topnav";
      }
    }
  }



}
