import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userList : any = [];
  editingUser: any = null;
  data : any;

  constructor(private http : HttpClient){

  }
  addUser(udata : any){
    /*
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
    */
   this.http.post("http://localhost:8800/insert",udata.value).
   subscribe((response) =>{
    console.log(response);
   })
  }
 
  editUser(user: any) {
    this.editingUser = user;
  }
 
  updateUser(editForm: any) {
    // Update user logic here
    this.editingUser = null;
  }
 
  cancelEdit() {
    this.editingUser = null;
  }
 
  deleteUser(user: any) {
    // Implement delete functionality here
    // You can remove the user from the userList array
    const index = this.userList.indexOf(user);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }
 
 getAllUsers(){
  this.http.get('http://localhost:8800/getAll').subscribe((response) => { 
    this.data =response;
    console.log(this.data);
  });

 }
 
}