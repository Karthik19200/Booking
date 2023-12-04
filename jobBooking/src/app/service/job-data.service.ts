import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  baseurl='http://localhost:5000';


  constructor(private http: HttpClient ) { }


  submit(pass: FormGroup){
    const body = pass;
    return this.http.post('http://localhost:5000/submit',body)
  }

getAllJobs(){
  return this.http.get('http://localhost:5000/jobData')
}

}
