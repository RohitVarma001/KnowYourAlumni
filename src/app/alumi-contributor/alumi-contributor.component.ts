import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-alumi-contributor',
  templateUrl: './alumi-contributor.component.html',
  styleUrls: ['./alumi-contributor.component.css']
})
export class AlumiContributorComponent implements OnInit {
  data: any[];
  msg: string
  isAdmin: boolean = false
  loggedIn: boolean = false

  constructor(public tablesrc: TableServiceService, public user: UserServiceService) { }

  ngOnInit(): void {
    this.loggedIn = this.user.isLoggedIn();
    if (this.user.isLoggedIn()) {
      this.user.isAdmin(parseInt(localStorage.getItem("loggeduser"))).subscribe((data: boolean) => {
        this.isAdmin = data;
      });
    }
    this.tablesrc.getalltableData().subscribe((data: any[]) => {
      this.data = data;
    }, (error) => {
      this.msg = "Table Not Found";
    });
  }

  doSearch(search: string) {
    this.tablesrc.searchNames(search).subscribe((data: any[]) => {
      this.data = data;
    });
  }

  doDelete(userid: any) {
    if (confirm("Do you want to delete the Record?")) {
      this.tablesrc.deleteTableData(userid).subscribe((data) => {
        this.msg = "Deletion Successfull";
        window.location.reload();
      }, (error) => {
        this.msg = "Error in Deleting";
      });
    }
  }

}
