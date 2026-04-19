import { Routes } from '@angular/router';
import { CreatePostComponent } from './create-post.component';
import { DeletePostComponent } from './delete-post.component';
import { GetPostsComponent } from './get-posts.component';
import { HttpHomeComponent } from './http-home.component';
import { HttpShellComponent } from './http-shell.component';
import { UpdatePostComponent } from './update-post.component';

export const HTTP_ROUTES: Routes = [
  {
    path: '',
    component: HttpShellComponent,
    children: [
      {
        path: '',
        component: HttpHomeComponent,
      },
      {
        path: 'get',
        component: GetPostsComponent,
      },
      {
        path: 'post',
        component: CreatePostComponent,
      },
      {
        path: 'put',
        component: UpdatePostComponent,
      },
      {
        path: 'delete',
        component: DeletePostComponent,
      },
    ],
  },
];

