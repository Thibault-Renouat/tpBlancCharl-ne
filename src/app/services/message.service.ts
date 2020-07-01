import { Injectable } from '@angular/core';
import { Message} from "../models/message";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {throwError, Observable} from "rxjs";
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrlMessages = 'http://localhost:3000/charlene-message';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

messages:Message[];

  constructor(private http: HttpClient) { }

  getAllMessages():Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrlMessages).pipe(retry(1),
      catchError((this.handleError)));
  }


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}
