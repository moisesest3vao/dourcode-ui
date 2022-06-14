import { Router } from '@angular/router';
import { AccountService } from './../../../service/account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  constructor(private accountService:AccountService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.logout();
  }

  goToProfile():void{
    this.router.navigate(['me']);
  }

}
