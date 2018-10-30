import { ApiService } from './../shared/api.service';
import { Notebook } from './model/notebook';
import { Component, OnInit } from '@angular/core';
import { Note } from './model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      res => { this.notes = res; },
      err => {
        alert('An error has occurred');
      }
    );
  }

  createNote(notebookId: string) {
    const newNote: Note = {
      id: null,
      title: 'New Note',
      text: 'Write some test in here',
      lastModifiedOn: null,
      notebookId: notebookId,
    };

    console.log(newNote);

    this.apiService.saveNote(newNote).subscribe (
      res => {
        newNote.id = res.id;
        this.notes.push(newNote);
      },
      err => {
        alert('An error has occurred while saving the note');
      }
    );
  }


  deleteNote(note: Note) {
    if (confirm('Are you sure you want to delete note?')) {
      this.apiService.deleteNote(note.id).subscribe(
        res => {
          const indexOfNote = this.notes.indexOf(note);
          this.notes.splice(indexOfNote, 1);
        },
        err => {
          alert('An error has occurred while saving the notebook');
        }
      );
    }
  }

  selectNotebook (notebook: Notebook) {
    this.selectedNotebook = notebook;
    // TODO: grab all the notes for this notebook only
    this.apiService.getNotesByNotebook(notebook.id).subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert('An error has occurred while downloading the notes');
      }
    );

  }

  getAllNotebooks() {

    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
      },
      err => {
        alert('An error has occurred');
      }
    );

  }

  clickedAllBtn() {
    this.getAllNotes();
    this.selectedNotebook = null;
  }

  createNotebook() {
    const newNotebook: Notebook = {
      name: 'New notebook',
      id: null,
      nbOfNotes: 0
    };
    this.apiService.postNotebook(newNotebook).subscribe(
      res => {
        newNotebook.id = res.id;
        this.notebooks.push(newNotebook);
      },
      err => {
        alert('An error has occurred while saving the notebook');
      }
    );
  }

  updateNotebook(updateNotebook: Notebook) {
    this.apiService.postNotebook(updateNotebook).subscribe(
      res => {

      },
      err => {
        alert('An error has occurred while saving the notebook');
      }
    );
  }

  deleteNotebook(deleteNotebook: Notebook) {
    if (confirm('Are you sure you want to delete notebook?') {
      this.apiService.deleteNotebook(deleteNotebook.id).subscribe(
        res => {
          const indexOfNotebook = this.notebooks.indexOf(deleteNotebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        err => {
          alert('An error has occurred while saving the notebook');
        }
      );
    }
  }

  updateNote(updateNote: Note) {
    this.apiService.saveNote(updateNote).subscribe(
      res => {
      },
      err => {
        alert('An error has occurred while saving the notebook');
      }
    );
  }

}
