import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3001'; 
  private postUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/users`);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.postUrl}/posts`);
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/users/${id}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.url}/users/${user.id}`,user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/posts/${id}`);
  }
  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.postUrl}/posts`, post);

  }
  deletePost(post: any): Observable<any> {
    return this.http.delete<any>(`${this.postUrl}/posts/${post.id}`);
  }
  
  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.postUrl}/posts/${post.id}`,post);
  }
  
}






// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }
