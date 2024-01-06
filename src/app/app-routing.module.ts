import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', component: UserListComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'posts/add', component: PostFormComponent},
  { path: 'posts/edit', component: PostFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
