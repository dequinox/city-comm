import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

      complaints: Complaint[];
      selectedComplaint: Complaint;

      constructor(private dataService: DataService) { }


  	getComplaints(): void {
  		this.dataService.getComplaints()
                  .subscribe(complaints => this.complaints = complaints);
  	}

      getClass(status: string) : string {
            if (status == "✔") return "solved";
            if (status == "▅") return "active";
            return "suspended";
      }

  	onSelect(complaint: Complaint): void {
  		this.selectedComplaint = complaint;
      }

      ngOnInit() {
            this.getComplaints();
      }

}
