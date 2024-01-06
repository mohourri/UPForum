
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/userService';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  currentUser: any;
  post: any = {
    id:Date.now().toString(),
    title: '',
    content: '',
    timestamp: new Date().toISOString(),
    tags: [{ tagId: Date.now().toString(), tagName: '' }]
  };


  constructor(private service: DataService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log("the current user ", this.currentUser);
    });
  }

  
  onSubmit() {
    
      this.currentUser.posts.push(this.post);
      this.service.updateUser(this.currentUser).subscribe(post => {
        console.log("The user has been updated successfuly !")
        this.router.navigate(['/profile']);

      });
      this.service.addPost(this.post).subscribe(post => {
        console.log("The post has been added successfuly !")
        this.router.navigate(['/profile']);

      });
    
  }
}

