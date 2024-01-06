import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'interfaces';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/userService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  showAddPostForm: boolean = false;
  newPost: any = { title: '', content: '' };

  constructor(private service: DataService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user =>{
      this.currentUser = user;

    })
  }
  
  

  
  navigateToPost() {
    this.router.navigate(['/posts/add']);
  }
  
  editPost(post: any) {
    this.router.navigate(['/posts/edit'], { state: { extraData: post } });
  }
  

  deletePost(post: any) {
    this.currentUser.posts = this.currentUser.posts.filter((p:Post) => p.id !== post.id);

    this.service.updateUser(this.currentUser).subscribe(user => {
      alert("The user has been updated !");
      console.log(user);
    });

    this.service.deletePost(post).subscribe(user => {
      alert("The post has been deleted !");
    });
  }

  formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric' 
    };
    
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  
}
