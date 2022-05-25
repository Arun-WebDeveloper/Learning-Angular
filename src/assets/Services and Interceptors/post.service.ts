import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from 'src/app/HttpRequests/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {
  error = new Subject<string>();
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content }
    this.http.post<{ name: string }>('https://ng-angular-http-dd651-default-rtdb.firebaseio.com/posts.json', postData,
      {
        observe: 'response'
      }

    )
      .subscribe(responseData => {
        console.log(responseData)
      }, error => {
        this.error.next(error.message)
      })
  }
  fetchPost() {
    let newParams = new HttpParams;
    newParams = newParams.append('print', 'pretty')
    newParams = newParams.append('newParams', 'created')
    return this.http
      .get<{ [Key: string]: Post }>('https://ng-angular-http-dd651-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ "Custom-Headers": "HttpHeaders" }),
          //params: newParams,
          params: new HttpParams().set("params","loading"),
          responseType: 'json'
        }
      )
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key })
          }
        }
        return postsArray;
      }),
        //Handling Errors
        catchError(errorRes => {
          return throwError(errorRes);
        })
      )
  }
  deleteAllPosts() {
    return this.http.delete('https://ng-angular-http-dd651-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }).pipe(tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Sent) {
          //..
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      }))
  }
}
