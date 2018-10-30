import { Notebook } from './model/notebook';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllNotebooks();
  }

  public getAllNotebooks() {
    let url = "http://localhost:8082/api/notebooks/all";

    this.http.get<Notebook[]>(url).subscribe(
      res => {
        this.notebooks = res;
      },
      err => {
        alert("Ann error has occured!");
      }
    );

  }

}
