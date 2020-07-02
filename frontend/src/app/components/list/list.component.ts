import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';
// import * as jspdf from 'jspdf';
declare let jsPDF;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
 
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['name', 'gender', 'state', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();

    

  }


  
  convert(){
    console.log("heloo");
    var item = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
    };
    var doc = new jsPDF();
    var col = ["Details", "Values"];
    var rows = [];

    for(var key in item){
        var temp = [key, item[key]];
        rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('Test.pdf');
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  
 

}
