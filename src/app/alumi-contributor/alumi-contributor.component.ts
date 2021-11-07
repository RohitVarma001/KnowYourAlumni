import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumi-contributor',
  templateUrl: './alumi-contributor.component.html',
  styleUrls: ['./alumi-contributor.component.css']
})
export class AlumiContributorComponent implements OnInit {
  data: Array<any>;
  constructor() { 
    this.data = [
      { Name: 'John', Id: 'DDSWW78', Course: 'BTECH',Dept:'CSE',College:'SIST',Year:'2018'},
      { Name: 'John', Id: 'DDSWW78', Course: 'BTECH',Dept:'CSE',College:'SIST',Year:'2018 '},
      { Name: 'John', Id: 'DDSWW78', Course: 'BTECH',Dept:'CSE',College:'SIST',Year:'2018' },
      { Name: 'John', Id: 'DDSWW78', Course: 'BTECH',Dept:'CSE',College:'SIST',Year:'2018'}
  ];
  }

  ngOnInit(): void {
  }

}
