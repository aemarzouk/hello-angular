import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import "rxjs/add/operator/map"

@Component({
  selector: 'app-github-viewer',
  templateUrl: './github-viewer.component.html'
})
export class GithubViewerComponent implements OnInit {

  user = false;
  repos = [];

  constructor( private githubService: GithubService) {
    this.githubService.getUserProfile().subscribe(user => {
      console.log(user);
      this.user = user;
    })

    this.githubService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {

  }

}
