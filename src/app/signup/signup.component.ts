import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg: string
  constructor(public userSer: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  doRegistration(form: NgForm) {
    console.log("User Registered");

    console.log(form.value);

    this.userSer.userRegistration(form.value).subscribe((data: string) => {

      console.log(data);

      this.msg = data;

      form.reset();
      this.router.navigate(['/login']);

    }, (error: any) => {

      console.log(error);

      this.msg = "Something Went Wrong";

    });


  }
}
