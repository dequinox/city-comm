import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapsComponent } from './maps/maps.component';
import { ProblemsComponent } from './problems/problems.component';
import { IdeasComponent } from './ideas/ideas.component';
import { PlansComponent } from './plans/plans.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapsComponent,
    ProblemsComponent,
    IdeasComponent,
    PlansComponent,
    ProblemDetailComponent,
    ComplaintsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO5tcve9z5NaI-3pNPdqekWIKlNDy02-w'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
