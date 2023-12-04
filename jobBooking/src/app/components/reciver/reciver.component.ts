import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { SampleDataService } from 'src/app/service/sample-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.css']
})

export class ReciverComponent implements OnInit  {
selectedName !: string;
@Input() reciver:any;
@Input() reciverDetails!:any;
@Input() reciverMatchedData!:any;
@Input() isReceiverFormDisabled:boolean | undefined
countries!:any
sampleDetails!:any
filteredNames!: any[];
customerReference!:any[];

  names: any;
  // isEnabled: any;

constructor(private dataService:SampleDataService,private snackBar: MatSnackBar){
  
  // this.reciver.get('Name').valueChanges
  //     .subscribe((value:any) => {
  //       // You can perform actions here based on the selected value
  //       console.log('Selected Name:', value);
  //     });

}

ngOnInit(): void {
//  console.log(this.reciver,"This is reciver from jobComponent");
 this.countries=this.dataService.countries;
    this.sampleDetails=this.dataService.sampleDetails;
    this.customerReference=this.dataService.customerReference;
   

   this.subscribeToNameChanges();
   
}

disableFormGroup(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(controlName => {
    formGroup.get(controlName)?.disable();
  });
}

enableFormGroup(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(controlName => {
    formGroup.get(controlName)?.enable();
  });
}

subscribeToNameChanges() {
  this.reciver.get('Name').valueChanges.subscribe((value: any) => {
    this.filteredNames = this._filter(value);
    // console.log(this.filteredNames, "this is filtered value");
    // Additional actions based on filtered value
  });
  this.reciver.get('Name').valueChanges.subscribe((newValue: string) => {
    if (newValue) {
      this.getDetailsOfName();
    }
  });
}
   private _filter(value: string): any[] {
    const filterValue = value?.toLowerCase();
    return this.sampleDetails.filter((detail:any) =>
    detail.name.toLowerCase().includes(filterValue)
  );
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 5000, // Duration the snack-bar should be displayed (in milliseconds)
    verticalPosition: 'top', // Position of the snack-bar
    horizontalPosition: 'right' // Position of the snack-bar
    // Other configurations can be added based on your requirements
  });
}


// search = (text$: Observable<string>): Observable<string[]> => {
//   return text$.pipe(
//     debounceTime(200),
//     distinctUntilChanged(),
//     map((term: any) => term === '' ? []
//       : this.sampleDetails.filter((name:any) => name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
//   );
// }

// formatter = (result: string) => result;

getDetailsOfName(){
const selectedNameId = this.reciver.get('Name').value;
const nameDetails = this.sampleDetails.find((data:any)=>data.id === selectedNameId)
// console.log(nameDetails,"this is name details");

if(nameDetails){
  this.reciver.get('Name').setValue(nameDetails.name)
  this.reciver.get('email').setValue(nameDetails.email)
  this.reciver.get('phone').setValue(nameDetails.phoneNumber)
  this.reciver.get('street').setValue(nameDetails.street)
  this.reciver.get('streetNo').setValue(nameDetails.streetNo)
  this.reciver.get('city').setValue(nameDetails.city)
  this.reciver.get('postCode').setValue(nameDetails.postcode),
  this.reciver.get('state').setValue(nameDetails.state),
  this.reciver.get('contactPerson').setValue(nameDetails.contactperson),
  this.reciver.get('building').setValue(nameDetails.building),
  this.reciver.get('mobile').setValue(nameDetails.mobile),
  this.reciver.get('subRub').setValue(nameDetails.subrub)
  
}

}

ngOnChanges(changes: SimpleChanges) {
  if (changes['reciverDetails'] && changes['reciverDetails'].currentValue) {    
   
    if(this.reciverMatchedData[0].detail.id == this.reciverDetails[0].id ){
      this.reciver.disable()
      this.openSnackBar('Sender and Reciver can not be same', 'x');
      this.reciver.get('Name').setValue('')  
      this.reciver.get('email').setValue('')
      this.reciver.get('phone').setValue('')
      this.reciver.get('street').setValue('')
      this.reciver.get('streetNo').setValue('')
      this.reciver.get('city').setValue('')
      this.reciver.get('postCode').setValue(''),
      this.reciver.get('state').setValue(''),
      this.reciver.get('contactPerson').setValue(''),
      this.reciver.get('building').setValue(''),
      this.reciver.get('mobile').setValue(''),
      this.reciver.get('subRub').setValue('')
    }
   else{
    this.reciver.enable()
    this.reciver.get('reciverAddressId').setValue(this.reciverDetails[0].id)
    this.reciver.get('Name').setValue(this.reciverDetails[0].name)  
    this.reciver.get('email').setValue(this.reciverDetails[0].email)
    this.reciver.get('phone').setValue(this.reciverDetails[0].phoneNumber)
    this.reciver.get('street').setValue(this.reciverDetails[0].street)
    this.reciver.get('streetNo').setValue(this.reciverDetails[0].streetNo)
    this.reciver.get('city').setValue(this.reciverDetails[0].city)
    this.reciver.get('postCode').setValue(this.reciverDetails[0].postcode),
    this.reciver.get('state').setValue(this.reciverDetails[0].state),
    this.reciver.get('contactPerson').setValue(this.reciverDetails[0].contactperson),
    this.reciver.get('building').setValue(this.reciverDetails[0].building),
    this.reciver.get('mobile').setValue(this.reciverDetails[0].mobile),
    this.reciver.get('subRub').setValue(this.reciverDetails[0].subrub)
   }
  }

  console.log("this is matched data",this.reciverMatchedData);
  if (changes['isReceiverFormDisabled']?.currentValue) {
      this.disableFormGroup(this.reciver) 
    } else {
      this.enableFormGroup(this.reciver)
    }

}
}
// getDataByMatchingIds(customerReference: any[], sampleDetails: any[]) {
//   const matchedData: any[] = [];

//     customerReference.forEach(customerItem => {
//     const matchingDetail = sampleDetails.find(detail => detail.orderId === customerItem.orderId);
//     if (matchingDetail) {
//       matchedData.push({ customer: customerItem, detail: matchingDetail });
//     }
//   });
// }

