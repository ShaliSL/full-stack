import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-order' },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'edit-order/:id', component: EditOrderComponent },
  { path: 'list-order', component: ListOrderComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
