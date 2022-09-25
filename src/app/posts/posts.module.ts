import {NgModule} from '@angular/core';
import {PostsRoutingModule} from './posts.routing.module';
import {CommonModule} from '@angular/common';

import {PostsListComponent} from './posts-list/posts-list.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostsResolver} from './posts.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {PostsDataService} from "./posts-data.service";

const entityMetadata: EntityMetadataMap = {
  Post: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: false
    }
  }
};

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
  providers: [
    PostsResolver,
    PostsDataService
  ]
})
export class PostsModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    postDataService: PostsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Post', postDataService);
  }
}
