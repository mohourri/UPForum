import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs'; // Import Observable
import { User } from 'interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: any = "150";
  currentUser: User | null = null; // Use User model or appropriate type

  constructor(private service: DataService) {}

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): Observable<User> {
    // Return the Observable directly
    return this.service.getUser(this.userId);
  }

  clearCurrentUser() {
    this.currentUser = null;
  }
}
