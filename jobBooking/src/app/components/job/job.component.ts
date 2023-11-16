import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JobBookingService } from 'src/app/service/job-booking.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent {
jobBookingForm !: FormGroup
headers: any;
sender: any;
reciver: any;
product: any;

constructor(private formService : JobBookingService){
  this.jobBookingForm = this.formService.getJobBookingForm();
  console.log(this.jobBookingForm,"dsd")

  this.headers = this.formService.jobBookingForm.get('header') as FormGroup;
  this.sender = this.formService.jobBookingForm.get('sender') as FormGroup;
  this.reciver = this.formService.jobBookingForm.get('reciver') as FormGroup;
  this.product = this.formService.jobBookingForm.get('product') as FormGroup;
}

save(){
  console.log(this.jobBookingForm);
  
  // console.log(this.headers.value);
  // console.log(this.sender.value);
  // this.formService.getJobBookingForm().subscribe
}
}
