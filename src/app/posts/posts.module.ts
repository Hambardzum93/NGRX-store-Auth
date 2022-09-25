import {NgModule} from '@angular/core';
import {PostsRoutingModule} from './posts.routing.module';
import {CommonModule} from '@angular/common';

import {PostsListComponent} from './posts-list/posts-list.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostsResolver} from './posts.resolver';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PostsListComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PostsResolver]
})
export class PostsModule {

}
