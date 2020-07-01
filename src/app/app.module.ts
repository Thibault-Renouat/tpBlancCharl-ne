import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivreOrComponent } from './components/livre-or/livre-or.component';
import {HttpClientModule} from '@angular/common/http';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { EditMessageComponent } from './components/edit-message/edit-message.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LivreOrComponent,
    AddMessageComponent,
    MessageDetailComponent,
    EditMessageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
