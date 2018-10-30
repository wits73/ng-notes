import { FeedbackViewModel } from './../feedback/feedback.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notebook } from '../notes/model/notebook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllNotebooks(): Observable<Notebook[]> {

    return null;

  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return null;
  }
}
