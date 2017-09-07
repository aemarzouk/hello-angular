import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-github-viewer',
  templateUrl: './github-viewer.component.html'
})
export class GithubViewerComponent implements OnInit {

  constructor( private githubService: GithubService) { }

  ngOnInit() {

  }

}
