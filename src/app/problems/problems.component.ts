import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { DataService } from '../data.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

      categories: Category[];
  	selectedCategory: Category;

  	constructor(private dataService: DataService) { }

  	getCategories(): void {
  		this.dataService.getCategories()
                  .subscribe(categories => {
                        this.categories = categories;
                        this.onSelect(categories[0]);
                  });
  	}

  	onSelect(category: Category): void {
  		this.selectedCategory = category;
  	}

  	ngOnInit() {
  		this.getCategories();
    	}

}
