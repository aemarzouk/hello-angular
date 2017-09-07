import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
  private username: string;
  constructor() {
    console.log("Github Service is ready.")
    this.username = "egnuke";
  }

}
