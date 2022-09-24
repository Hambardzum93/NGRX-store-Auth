import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../models/post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnDestroy {
  addPostForm: FormGroup;
  subs$: Subscription;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    });
  }

  onAddPost(): void {
    const post: Post = this.addPostForm.value;
    this.subs$ = this.postService.add(post).subscribe(data => {
      this.router.navigate(['/posts']);
    });
  }

  ngOnDestroy(): void {
    this.subs$ ? this.subs$.unsubscribe() : '';
  }

}
