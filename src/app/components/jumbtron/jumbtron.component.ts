import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jumbtron',
	templateUrl: './jumbtron.component.html',
	styleUrls: ['./jumbtron.component.css']
})
export class JumbtronComponent implements OnInit {

	private heading:string;
	private text:string;
	private buttonText:string;
	private buttonUrl:string;
	constructor() { }

	ngOnInit() {
		this.heading = 'Hello World';
		this.text = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
		this.buttonText = 'Read More';
		this.buttonUrl = 'http://test.com';
	}

}