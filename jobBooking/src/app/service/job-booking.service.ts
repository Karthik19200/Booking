import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobBookingService {
  createProductFormGroup() {
    throw new Error('Method not implemented.');
  }

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
      product:this.form.array([this.productsF()])
    });

  }



private header():FormGroup{
  return this.form.group({
    customerName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s()]*'),],],
    companyName: [null],
    // customerName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s()]*'),],],
    // companyName: [null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]],
    customerReference: [null,[Validators.required]],
    reciverReference: [null],
    freightReadBy: [null], 
  })
}

  private sender(): FormGroup {
    return this.form.group({
      senderAddressId: [null,[Validators.required]],
      country: [null],
      Name: [null,[Validators.required]],
      // findAddress: [null ],
      building: [null],
      streetNo:[null],
      street:[null],
      subRub:[null],
      city:[null],
      state:[null],
      postCode:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      contactPerson:[null],
      mobile:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      phone:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),],],
      pickupInstruction:[null]   
    });
  }


  private reciver(): FormGroup {
    return this.form.group({
      reciverAddressId: [null,[Validators.required]],
      country: [''],
      Name: [null],
      // findAddress: [null],
      building: [null],
      streetNo:[null],
      street:[null],
      subRub:[null],
      city:[null],
      state:[null],
      postCode:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      contactPerson:[null],
      mobile:[null,[Validators.required, Validators.pattern(/^\d{10}$/)]],
      phone:[null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),],],
      pickupInstruction:[null],
      signatureRequired:[null]   
    });
  }

  public productsF():FormGroup {
    return this.form.group({
      package:[null],
      units:[null],
      weight:[null],
      cubic:[null],
      length:[null],
      width:[null],
      height:[null],
      packageType:[null],
      remarks:[null]
    })
  }


  

}
