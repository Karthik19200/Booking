import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JobComponent } from './components/job/job.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ReciverComponent } from './components/reciver/reciver.component';
import { SenderComponent } from './components/sender/sender.component';


const routes: Routes = [
  {path:'',component:JobComponent},
  {path:'Job',component:JobComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Sender',component:SenderComponent },
  {path:'Reciver',component:ReciverComponent},
  {path:'Products',component: ProductsComponent},
  {path:'jobsList',component:JobsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
