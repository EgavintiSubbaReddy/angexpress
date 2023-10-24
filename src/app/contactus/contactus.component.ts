import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  title = 'angexpress';
  userList : any = [];
  editingUser: any = null;
  data : any;

  constructor(private http : HttpClient,private baccess :BackendAccessService){

  }
  addUser(udata : any){
    this.userList=this.baccess.addUser(udata);
   
  }

  getAllUsers(){
    this.userList=this.baccess.getAllUsers();
 

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
 
 

}
