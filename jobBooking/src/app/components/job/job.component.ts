import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { JobBookingService } from 'src/app/service/job-booking.service';
import { JobDataService } from 'src/app/service/job-data.service';
import { SampleDataService } from 'src/app/service/sample-data.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

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
receivedFilteredArray: any[] = [];
recivedCompanyNameFiltered:any[]=[];
recievedCustomerReference!:any; 
recievedMatchedDatafromsender!:any;
receivedChildData:any;
companyValueId:any;
productListArray:any;

constructor(private formService : JobBookingService,private dataservice:SampleDataService,private jobDataS:JobDataService){
 
}

ngOnInit()
{
  this.jobBookingForm = this.formService.getJobBookingForm();
  // console.log(this.jobBookingForm,"dsd")
  this.headers = this.formService.jobBookingForm.get('header') as FormGroup;
  this.sender = this.formService.jobBookingForm.get('sender') as FormGroup;
  this.reciver = this.formService.jobBookingForm.get('reciver') as FormGroup;
  this.product= this.jobBookingForm.get('product') as FormArray
  console.log(this.reciver);
  
}

showForms()
{
  console.log(this.jobBookingForm)
}

compareFormGroupValues(formGroup1: FormGroup, formGroup2: FormGroup) {

  const nameValue1 = formGroup1 ? formGroup1.get('reciverAddressId')?.value : null;
  const nameValue2 = formGroup2 ? formGroup2.get('senderAddressId')?.value : null;

  return nameValue1 === nameValue2;
}

performComparison() {
if (this.reciver && this.sender && this.compareFormGroupValues(this.reciver, this.sender)) {
  console.log('Both headers and sender have the same value:', this.reciver.value);
  this.reciver.disable();
}
}


save(){
 this.performComparison()
  console.log(this.jobBookingForm.value,"this is job response");
  return this.jobDataS.submit(this.jobBookingForm.value).subscribe((respone:any)=>{
    console.log("this is response",respone);
  })
}





 



receiveFilteredArray(event: any[]) {
  this.receivedFilteredArray = [event];
  console.log(this.receivedFilteredArray,"this is recieved filtered array");
}

recivedCompanyArray(event:any[]){
  this.recivedCompanyNameFiltered=[event];
  // console.log(this.recivedCompanyNameFiltered,"this is ==>>recivedCompany");  
}

recievedCustomerReferencef(event:any){
  this.recievedCustomerReference=event ;
  console.log(this.recievedCustomerReference,"this is recivedCustomerReference");
}

recievedOrderArray(event:any){
  this.recievedCustomerReference=event ;
  // console.log(this.recievedCustomerReference,"this is ==>recivedCustomer");
}

recivedProductListArray(event:any){
this.productListArray=event;
// console.log(this.productListArray,"this is ==>product List");
}

recievedMatchedData(event:any){
  this.recievedMatchedDatafromsender=event;
  console.log("this is matched data from sender component", this.recievedMatchedDatafromsender);
}

}