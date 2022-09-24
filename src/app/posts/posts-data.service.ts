import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Post} from '../models/post.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()

export class PostsDataService extends DefaultDataService<Post>{
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);

  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://ngrx-store-authentication-default-rtdb.europe-west1.firebasedatabase.app/posts.json`)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (const key in data){
            posts.push({...data[key], id: key});
          }
          return posts;
        })
      );
  }

}