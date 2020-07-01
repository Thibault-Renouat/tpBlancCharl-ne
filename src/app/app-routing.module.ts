import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LivreOrComponent} from "./components/livre-or/livre-or.component";
import {AddMessageComponent} from "./components/add-message/add-message.component";
import {EditMessageComponent} from "./components/edit-message/edit-message.component";
import {MessageDetailComponent} from "./components/message-detail/message-detail.component";


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: LivreOrComponent},
  { path:'add-message', component: AddMessageComponent},
  { path:'message/:id', component: MessageDetailComponent},
  { path:'message/edit/:id', component: EditMessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
