import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Post} from '../models/post.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Update} from '@ngrx/entity';

@Injectable()

export class PostsDataService extends DefaultDataService<Post> {


  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);

  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.fbUrl + environment.postEndPoint)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (const key in data) {
            posts.push({...data[key], id: key});
          }
          return posts;
        })
      );
  }

  add(post: Post): Observable<Post> {
    return this.http.post<{ name: string }>(environment.fbUrl + environment.postEndPoint, post)
      .pipe(
        map(data => {
          return {...post, id: data.name};
        })
      );
  }

  update(post: Update<Post>): Observable<Post> {
    return this.http.put<Post>(environment.fbUrl + `/posts/${post.id}.json`, {
      ...post.changes
    });
  }

  delete(id: string): Observable<string> {
    return this.http.delete(environment.fbUrl + `/posts/${id}.json`)
      .pipe(
        map(data => {
          return id;
        })
      );
  }

}
