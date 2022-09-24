import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppComponent} from './app.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {SinglePostComponent} from './posts/single-post/single-post.component';
import {EditPostComponent} from './posts/edit-post/edit-post.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {HomeComponent} from './home/home.component';
import {EntityDataModule, EntityDataService} from '@ngrx/data';
import {entityConfig} from './entity-metadata';
import {HttpClientModule} from '@angular/common/http';
import {PostsDataService} from './posts/posts-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsResolver} from './posts/posts.resolver';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    PostsDataService,
    PostsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(entityDataService: EntityDataService, postDataService: PostsDataService) {
    entityDataService.registerService('Post', postDataService);
  }

}
