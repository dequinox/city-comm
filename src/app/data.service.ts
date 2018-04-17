import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './mock-categories';

import { Complaint } from './complaint';
import { COMPLAINTS } from './mock-complaints';

import { Score } from './score';

import { Plan } from './plan';
import { PLANS } from './mock-plans';

import { Idea } from './idea';
import { IDEAS } from './mock-ideas';


import { Point } from './point';
import { POINTS } from './mock-points';

import 'rxjs/add/operator/mergeMap';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {


      private scoresUrl = "http://10.240.19.126:5002/stats?";
      private pointsUrl = "http://10.91.39.40:51722/api/values/";

      constructor(private http: HttpClient) { }


      getCategories(): Observable<Category[]> {
            return of(CATEGORIES);
      }

      getPoints(): Observable<Point[]> {
            return of(POINTS);
      }

      getScores(category: string): Observable<Score[]> {
            const url = `${this.scoresUrl}tag=${category}`;
            return this.http.get<Score[]>(url);
      }


      getPlans(): Observable<Plan[]> {
          return of(PLANS);
      }

      getIdeas(): Observable<Idea[]> {
          return of(IDEAS);
      }


      getComplaints(): Observable<Complaint[]> {
          return of(COMPLAINTS);
      }

}
