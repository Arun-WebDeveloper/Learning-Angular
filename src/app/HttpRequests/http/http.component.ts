import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from 'src/assets/Services and Interceptors/post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private errorSubscription: Subscription
  @ViewChild('postForm') detailForm: NgForm;
  error = null;
  submitPosts = false;
  info = {
    Title: '',
    Content: '',

  }
  
  isFetching = false;
  loadedPosts: Post[] = [];
  value: any;

  constructor(private http: HttpClient, private postService: PostService) {
    //setTimeout(() => {
    //  this.isFetching = true;
    //}, 5000)

  }
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postService.fetchPost().subscribe(post => {
      this.isFetching = false;
      this.loadedPosts = post
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.content, postData.title)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPost().subscribe(post => {
      this.isFetching = false;
      this.loadedPosts = post
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error)
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPosts().subscribe(() => {
      confirm('All posts has been deleted')
      this.loadedPosts = [];
    })
  }
  //private getData() {
  //this.isFetching = true;

  //}
  handleError() {
    this.error = null;
  }
  submitDetails() {
    this.submitPosts = true;
    this.info.Title = this.detailForm.value.title;
    this.info.Content = this.detailForm.value.content;

  }
}



