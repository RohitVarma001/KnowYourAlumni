import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-add-table-data',
  templateUrl: './add-table-data.component.html',
  styleUrls: ['./add-table-data.component.css']
})
export class AddTableDataComponent implements OnInit {

  msg: String
  constructor(private router: Router, public tableSrc: TableServiceService) { }

  ngOnInit(): void {
  }

  doaddTable(form: NgForm) {

    console.log(form.value);

    this.tableSrc.addTableData(form.value).subscribe((data: string) => {

      this.msg = data;

      form.reset();
      this.router.navigate(['/alumni']);

    }, (error: any) => {

      console.log(error);

      this.msg = "Something Went Wrong";

    });


  }

}
