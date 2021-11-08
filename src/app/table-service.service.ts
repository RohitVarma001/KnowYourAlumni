import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(public http: HttpClient) { }

  getalltableData() {
    return this.http.get<any[]>("http://localhost:3000/getTableData");
  }

  addTableData(data: any) {
    return this.http.post<string>("http://localhost:3000/addTableData", data);
  }

  getTableData(userid: any) {
    return this.http.get<any[]>("http://localhost:3000/getTableData/" + userid);
  }

  editTableData(data: any) {
    return this.http.post<String>("http://localhost:3000/editTableData", data);
  }

  deleteTableData(userid: any) {
    return this.http.get<String>("http://localhost:3000/deleteTableData/" + userid);
  }

  searchNames(search: string) {
    return this.http.get<any[]>("http://localhost:3000/search/" + search);
  }

}
