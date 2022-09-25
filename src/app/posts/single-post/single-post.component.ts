import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  id: string;
  subs$: Subscription;
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.subs$ = this.postService.entities$.subscribe(posts => {
      this.post = posts.find(post => post.id === this.id);
    });

  }

  ngOnDestroy(): void {
    this.subs$ ? this.subs$.unsubscribe() : '';
  }

}
