import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() index: number
  constructor(private router: Router) { }

  ngOnInit(): void {


  }
  onLoadPage() {
    this.router.navigate(['/reactive'],{queryParams:{allowEdit:'1'},fragment:'loadingReachedReactive'})
  }
  onHttpPage(){
    this.router.navigate(['/http'],{queryParams:{httpPageReq:'allRequestsAreDone'},fragment:'loadedAndImplementedHttp'})
  }
}
