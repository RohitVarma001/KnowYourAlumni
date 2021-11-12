import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  msg: String
  data: any
  userId: any
  userName: String
  userEmail: String
  userCollege: String
  userPhone: String

  constructor(public userSer: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.data = this.userSer.user;
    this.userId = this.data._id;
    this.userName = this.data.uname;
    this.userEmail = this.data.uemail;
    this.userCollege = this.data.ucol;
    this.userPhone = this.data.uphone;
  }

  doEditUser(formData: NgForm) {

    formData.value._id = this.userId;
    if (formData.value.uopassword === this.userSer.user.upassword) {
      this.userSer.editUserData(formData.value).subscribe((data) => {
        this.msg = data;
        formData.reset();
        this.router.navigate(['/profile']);
      }, (error) => {
        this.msg = "Error in Editing User Data";
      })
    } else {
      this.msg = "Old Password didn't match";
    }

  }

}
