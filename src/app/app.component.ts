import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reloadComponent';

  constructor(){
    console.log("Inside AppComponent Constructor");
  }

  ngOnInit(){
    console.log("Loading AppComponent");
  }
}
