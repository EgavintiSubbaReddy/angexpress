import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any = [];
  editingUser: any = null;
  data : any;
  expresponse : string=""


    constructor(private http : HttpClient){

    }
    addUser(udata : any) : any{
      /*
      console.log(udata);
      console.log(udata.value);
      this.userList.push(udata.value);
      */
     this.http.post("http://localhost:8800/insert",udata.value).
     subscribe((response) =>{
      this.expresponse=response.toString();
      console.log(response);
     });
    }
     getAllUsers(){
      this.http.get('http://localhost:8800/getAll').subscribe((response) => { 
        this.userList =response;
        console.log(this.data);
        return this.userList;
      });
    }
  }

