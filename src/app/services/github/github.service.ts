import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class GithubService {
  private username: string;
  constructor(private http: Http) {
    console.log("Github Service is ready.")
    this.username = "egnuke";
  }

  getUserProfile(){
    return this.http.get('http://api.github.com/users/' + this.username).map(res => res.json());
  }

  getUserRepos(){
    return this.http.get('http://api.github.com/users/' + this.username + '/repos').map(res => res.json());
  }
}
