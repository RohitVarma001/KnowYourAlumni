import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any
  data: any
  msg: String

  constructor(public userSer: UserServiceService) { }

  ngOnInit(): void {

    this.data = {
      _id: parseInt(localStorage.getItem("loggeduser"))
    };
    console.log(this.data);
    this.userSer.userData(this.data).subscribe((data: any[]) => {
      if (data.length === 0) {
        this.msg = "User Invalid";
      } else {
        this.user = data[0];
      }
    }, (error) => {
      this.msg = "User Invalid";
    });
  }

}
