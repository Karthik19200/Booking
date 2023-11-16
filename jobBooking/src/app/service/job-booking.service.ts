import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobBookingService {

  senderForm!: FormGroup;
  jobBookingForm!: FormGroup;
  receiverForm!:FormGroup;
  headerForm!:FormGroup;
  productForm!:FormGroup;
  
  constructor(private form: FormBuilder) {
    
  }

  getJobBookingForm(): FormGroup {

    return this.jobBookingForm = this.form.group({
      header:this.header(),
      sender:this.sender(),
      reciver:this.reciver(),
      product:this.form.array([this.product()])
    });

  }



private header():FormGroup{
  return this.form.group({
    customerName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
    companyName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
    customerReference: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
    reciverReference: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
    freightReadBy: [null,[Validators.required, Validators.pattern('[a-zA-Z\\s]*')]], 
  })
}

  private sender(): FormGroup {
    return this.form.group({
      country: ['',],
      companyName: [null,],
      findAddress: [null ],
      building: ['', Validators.required],
      streetNo:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      street:[null],
      subRub:['', Validators.required],
      city:[null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      state:[null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      postCode:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      contactPerson:[null,[Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      mobile:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      phone:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),],],
      pickupInstruction:[null]   
    });
  }


  private reciver(): FormGroup {
    return this.form.group({
      country: ['',[Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      companyName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      findAddress: ['', Validators.required],
      building: ['', Validators.required],
      streetNo:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      subRub:['', Validators.required],
      city:[null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      state:[null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      postCode:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      contactPerson:[null,[Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
      mobile:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      phone:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),],],
      pickupInstruction:[null],
      signatureRequired:[null]   
    });
  }

  private product():FormGroup {
    return this.form.group({
      package:[null],
      cubic:[null],
      length:[null],
      width:[null],
      height:[null],
      packageType:[null],
      remarks:[null]
    })
  }

}
