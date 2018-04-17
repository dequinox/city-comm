import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Idea } from '../idea';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

      ideas: Idea[];
      selectedIdea: Idea;

      constructor(private dataService: DataService) { }

      getIdeas(): void {
  		this.dataService.getIdeas()
                  .subscribe(ideas => this.ideas = ideas);
  	}

  	onSelect(idea: Idea): void {
  		this.selectedIdea = idea;
  	}

      ngOnInit() {
            this.getIdeas();
      }

}
