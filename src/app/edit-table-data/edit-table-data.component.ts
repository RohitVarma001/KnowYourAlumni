import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TableServiceService } from '../table-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-table-data',
  templateUrl: './edit-table-data.component.html',
  styleUrls: ['./edit-table-data.component.css']
})
export class EditTableDataComponent implements OnInit {

  _id: any
  userName: string
  userEmail: String
  usercid: String
  usercad: String
  usercol: String
  userPhone: String
  useryop: String
  msg: String

  constructor(public activeRoute: ActivatedRoute, public tableSrc: TableServiceService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      this.tableSrc.getTableData(parseInt(param.userid)).subscribe((data: any[]) => {
        this._id = data[0]._id;
        this.userName = data[0].Name;
        this.userEmail = data[0].Email;
        this.usercid = data[0].cId;
        this.usercad = data[0].Course_Dept;
        this.usercol = data[0].College;
        this.userPhone = data[0].Phone;
        this.useryop = data[0].Year;
      }, (error) => {
        this.msg = "Error in getting data"
      })
    });
  }
  doeditTable(form: NgForm) {
    form.value._id = this._id;
    console.log(form.value);
    this.tableSrc.editTableData(form.value).subscribe((data) => {
      this.msg = data;
      form.reset();
      this.router.navigate(['/alumni']);
    }, (error) => {
      this.msg = "Error in Editing Table Data";
    });
  }
}
