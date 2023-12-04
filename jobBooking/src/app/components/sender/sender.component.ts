import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SampleDataService } from 'src/app/service/sample-data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  @Input() sender:any
  @Input() receivedArray:any[]=[]
  @Output() productListMatchedToPcomponent = new EventEmitter<any[]>()
  countries!:any;
  sampleDetails!:any[];
  filteredNames!: any[];

  // selectedName!:any;
  // nameDetails!:any;

  constructor(private dataService:SampleDataService,private form: FormBuilder ){
   
   
  }
  
 ngOnInit(): void {
    this.countries=this.dataService.countries;
    this.sampleDetails=this.dataService.sampleDetails;
    console.log("This is sampdetails",this.sampleDetails);   
    this.subscribeToNameChanges();
    this.getDetailsOfName()
}


ngOnChanges(changes: SimpleChanges) {
  if (changes['receivedArray'] && changes['receivedArray'].currentValue) {
    console.log('Received Array in ChildComponent:', this.receivedArray);
 
     const matchedData=this.getDataByMatchingIds(this.receivedArray, this.sampleDetails) 
     console.log("this is matched data ",matchedData);
     if(matchedData.length > 0)
     {
      this.productListMatchedToPcomponent.emit(matchedData)
      this.sender.get('Name').setValue(matchedData[0].detail.name)
      this.sender.get('building').setValue(matchedData[0].detail.building)
      this.sender.get('street').setValue(matchedData[0].detail.street)
 
      this.sender.get('streetNo').setValue(matchedData[0].detail.streetNo)
      this.sender.get('subRub').setValue(matchedData[0].detail.subrub)
      this.sender.get('city').setValue(matchedData[0].detail.city)
      this.sender.get('state').setValue(matchedData[0].detail.state)
      this.sender.get('postCode').setValue(matchedData[0].detail.postcode)
      this.sender.get('contactPerson').setValue(matchedData[0].detail.contactperson)
      this.sender.get('senderAddressId').setValue(matchedData[0].detail.id)
     }
     
  }
}

subscribeToNameChanges() {
  this.sender.get('Name').valueChanges.subscribe((value: any) => {
    this.filteredNames = this._filter(value);
    console.log(this.filteredNames, "this is filtered value");
    // Additional actions based on filtered value
  });
  this.sender.get('Name').valueChanges.subscribe((newValue: string) => {
    if (newValue) {
      this.getDetailsOfName();
    }
  });

}



   private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.sampleDetails.filter((detail:any) =>
    detail.name.toLowerCase().includes(filterValue)
  );
}

 getDataByMatchingIds(receivedArray: any[], sampleDetails: any[]) {
  const matchedData: any[] = [];

    receivedArray.forEach(customerItem => {
    const matchingDetail = sampleDetails.find(detail => detail.groupId === customerItem.id);
    if (matchingDetail) {
      matchedData.push({ customer: customerItem, detail: matchingDetail });
    }
  });

  
return matchedData
  
}







getDetailsOfName(){
const selectedName = this.sender.get('Name').value;
const nameDetails = this.sampleDetails.find((data:any)=>data.id === selectedName)
console.log(nameDetails,"this is name details");

if(nameDetails)
{
  this.sender.get('Name').setValue(nameDetails.name)
  this.sender.get('email').setValue(nameDetails.email)
  this.sender.get('phone').setValue(nameDetails.phoneNumber)
  this.sender.get('street').setValue(nameDetails.street)
  this.sender.get('streetNo').setValue(nameDetails.streetNo)
  this.sender.get('city').setValue(nameDetails.city)
  this.sender.get('postCode').setValue(nameDetails.postcode),
  this.sender.get('state').setValue(nameDetails.state),
  this.sender.get('contactPerson').setValue(nameDetails.contactperson),
  this.sender.get('building').setValue(nameDetails.building),
  this.sender.get('mobile').setValue(nameDetails.mobile)
  this.sender.get('subRub').setValue(nameDetails.subrub)
  // this.sender.get('findAddress').setValue(nameDetails.findAddress)
  // this.disableFormControls()

// this.sender.get('Name').disable()
this.sender.get('contactPerson').disable()
this.sender.get('state').disable()
this.sender.get('contactPerson').disable()
this.sender.get('building').disable()
this.sender.get('city').disable()


}

}


}