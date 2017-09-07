import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import "rxjs/add/operator/map"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-github-viewer',
  templateUrl: './github-viewer.component.html'
})
export class GithubViewerComponent implements OnInit {

  user = false;
  repos = [];
  username: string;

  updateUserInfo(){
    this.githubService.updateUsername(this.username);

    this.githubService.getUserProfile().subscribe(user => {
      console.log(user);
      this.user = user;
    })

    this.githubService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  constructor( private githubService: GithubService) {

   }

  ngOnInit() {

  }

}
