import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/data.service';
import { User} from '../../../../interfaces';
import {UserService} from '../../userService'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  friends: User[] = [];
  currentUser :any ;
  constructor(private service: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.friends = user.friends;
      this.currentUser = user;
      console.log("the current user fiends: ", this.friends);
      console.log("the current user: ", user);
    });
  }
  unfriend(user:any): void {
    this.friends = this.friends.filter((f:any)=> f!=user  )
    this.currentUser.friends = this.friends
    this.service.updateUser(this.currentUser).subscribe(user=>{
      console.log("the user fiends list has been updated !")
    })
  }
}
