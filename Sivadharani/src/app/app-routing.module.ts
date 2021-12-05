import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  {path: 'Home', component: Page3Component},
  {path: 'About', component: Page4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
