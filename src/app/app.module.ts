import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', component: NotesComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
