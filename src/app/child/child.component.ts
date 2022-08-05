import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunctionalityComponent } from '../common-functionality/common-functionality.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends CommonFunctionalityComponent implements OnInit {

  constructor(public override router:Router) {
    super(router);
    console.log("Inside ChildComponent constructor")
   }

  override ngOnInit(): void {
    console.log("Loading ChildComponent")
  }

  reload(){
   this.reloadComponent(false,'test');
     }

     reloadCurrent(){
      this.reloadComponent(true);
     }

}
