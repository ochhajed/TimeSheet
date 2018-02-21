import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  // projectDetailsForm : FormGroup;
  status = [
    {value:'running', viewValue : 'Running' },
    {value:'hold', viewValue : 'Hold'}
  ];
  constructor(
    //private fb:FormBuilder
  ) { }

  ngOnInit() {
    // this.projectDetailsForm = new FormGroup({
    //   'projectName':new FormControl(null),
    //   'projectType':new FormControl(null),
    //   'projectEmail':new FormControl(null),
    //   'projectTotalCost':new FormControl(null),
    //   'projectTechLead':new FormControl(null),
    //   'projectTeamMember':new FormControl(null),
    //   'projectStartDate':new FormControl(null),
    //   'projectEndDate':new FormControl(null),
    //   'projectStatus':new FormControl(null),
    //   'projectNotes':new FormControl(null)
    // });
    // this.projectDetailsForm = this.fb.group({
    //   'projectName':[null],
    //   'projectType':[null],
    //   'projectEmail':[null],
    //   'projectTotalCost':[null],
    //   'projectTechLead':[null],
    //   'projectTeamMember':[null],
    //   'projectStartDate':[null],
    //   'projectEndDate':[null],
    //   'projectStatus':[null],
    //   'projectNotes':[null]
    // });
  }


}
