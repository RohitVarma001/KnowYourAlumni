import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
