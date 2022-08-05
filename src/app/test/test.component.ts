import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunctionalityComponent } from '../common-functionality/common-functionality.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends CommonFunctionalityComponent implements OnInit {

  constructor(public override router:Router) {
    super(router);
    console.log("Inside TestComponent constructor")
   }

  override ngOnInit(): void {
    console.log("Loading TestComponent")
  }

  reloadCurrent(){
    this.reloadComponent(true);
  }

  reloadChild(){
    this.reloadComponent(false,"test/child")
  }


}
