import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  editPostForm: FormGroup;
  id: string;
  subs$: Subscription;

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

    this.editPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    });

    this.subs$ = this.postService.entities$.subscribe(posts => {
      if (posts.length) {
        const post = posts.find(post => post.id === this.id);
        this.editPostForm.patchValue({
          title: post.title,
          description: post.description
        });
      }
    });
  }

  onEditPost(): void {
    const postData = {
      ...this.editPostForm.value,
      id: this.id
    };
    this.postService.update(postData);
    this.router.navigate(['/posts']);
  }


  ngOnDestroy(): void {
    this.subs$ ? this.subs$.unsubscribe() : '';
  }

}
