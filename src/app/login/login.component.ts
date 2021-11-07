import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string
  constructor(public userSer: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(form: NgForm) {
    console.log("Login Successful");
    console.log(form.value);

    this.userSer.userLogin(form.value).subscribe((data: any[]) => {
      console.log(data);
      if (data.length === 0) {
        this.msg = "User Invalid";
      } else {
        this.userSer.user = data[0];
        form.reset();
        localStorage.setItem("loggeduser", data[0]._id);
        this.router.navigate(['/profile']);
      }
    }, (error) => {
      this.msg = "User Invalid";
    })
  }

}
