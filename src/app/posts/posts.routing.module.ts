import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostsResolver} from './posts.resolver';
import {AddPostComponent} from './add-post/add-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {NgModule} from "@angular/core";

const postRoutes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    resolve: {posts: PostsResolver}
  },
  {
    path: 'add',
    component: AddPostComponent
  },
  {
    path: 'edit/:id',
    component: EditPostComponent,
    resolve: {posts: PostsResolver}
  },
  {
    path: 'details/:id',
    component: SinglePostComponent,
    resolve: {posts: PostsResolver}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(postRoutes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {

}
