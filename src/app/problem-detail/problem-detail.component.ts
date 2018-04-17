import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { SimpleChanges } from '@angular/core';

import { Category } from '../category';
import { Score } from '../score';
import { DataService } from '../data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit, OnChanges {

      @Input() category: Category;
      scores: Score[];
      Math: any;
      maxScore: number = 0;

  	constructor(private dataService: DataService) {
            this.Math = Math;
      }

      onSelect(score): void {
      }

  	getScores(category: string): void {
  		this.dataService.getScores(category)
                  .subscribe(scores => {
                        this.scores = scores;
                        this.setMaxScore(scores);
                        console.log(scores);
                  });
  	}

      setMaxScore(scores: Score[]): void {
            var i:number;
            var l:number=scores.length;
            for (i=0;i<l;i++)
            {
                  if (this.maxScore < scores[i].score){
                        this.maxScore = scores[i].score;
                  }
            }
      }

      getX(day: number, month: number): number {
            var yday:number=0;
            if (month > 1) yday += 31;
            if (month > 2) yday += 28;
            if (month > 3) yday += 31;
            if (month > 4) yday += 30;
            if (month > 5) yday += 31;
            if (month > 6) yday += 30;
            if (month > 7) yday += 31;
            if (month > 8) yday += 31;
            if (month > 9) yday += 30;
            if (month > 10) yday += 31;
            if (month > 11) yday += 30;
            yday += day-1;
            return this.Math.round(yday/7)*20;
      }


      getY(day: number): number {
            return (day%7)*20;
      }

      getColor(score: number): string {
            var p:number=this.Math.round((score/this.maxScore)*100);
            /*if (p <= 25) return "#212121";
            if (p <= 50) return "#616161";
            if (p <= 75) return "#BDBDBD";
            if (p <= 100) return "#F5F5F5";*/
            var r = this.Math.round((score/this.maxScore)*255)+20;
            var g = this.Math.round((score/this.maxScore)*255)+20;
            var b = this.Math.round((score/this.maxScore)*255)+20;
            return "rgb("+r+", "+g+", "+b+")"
      }

      ngOnChanges(changes: SimpleChanges) {
            this.getScores(this.category.req);
      }

  	ngOnInit() {
  		this.getScores(this.category.req);
    	}

}
