import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/service/job-data.service';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  allJobs:any;
  constructor (private http:HttpClient,private jobDtaService:JobDataService ) {}
  ngOnInit(): void {

  this.getallJobs()
    
  }

getallJobs()
{
  return this.jobDtaService.getAllJobs().subscribe((response:any)=>{
    this.allJobs=response
    console.log("this is alljobs",this.allJobs);
    
  })
}



}
