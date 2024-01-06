import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/userService';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  currentUser: any ;
  comment:any ='';
  constructor(private service: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log("the current user ", this.currentUser);
    });
  }
  
  handleComment(post:any): void {
    post.comments.push(this.comment)
    
    this.currentUser.friends.map((f:any)=>{
      f.posts.map((p:any)=>{
        if(p.id == post.id){
          p =post
        }
      })
    })
    this.service.updatePost(post).subscribe(res => {
      console.log("The post has been updated successfully ! ");
      console.log(res);
    });
    this.service.updateUser(this.currentUser).subscribe(res => {
      console.log("The user has been updated successfully ! ");
      console.log(res);
    });
  }

  
}
