import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

      plans: Plan[];
      selectedPlan: Plan;

      constructor(private dataService: DataService) { }

      getPlans(): void {
  		this.dataService.getPlans()
                  .subscribe(plans => this.plans = plans);
  	}

  	onSelect(plan: Plan): void {
  		this.selectedPlan = plan;
  	}

      ngOnInit() {
            this.getPlans();
      }

}
