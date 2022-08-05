import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponent,
    CommonFunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
