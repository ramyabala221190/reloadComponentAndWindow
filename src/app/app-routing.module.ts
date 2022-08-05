import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{
  path:'test',
  component:TestComponent,
  children:[
    {
      path:'child',
      component:ChildComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
