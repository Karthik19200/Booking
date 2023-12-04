import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { JobBookingService } from 'src/app/service/job-booking.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { SampleDataService } from 'src/app/service/sample-data.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('datetimepicker') datetimepicker: MatDatepicker<any> | undefined;
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  datetimeControl = new FormControl(new Date());

  filteredNames!: any[];
  arrrayFiltered!: any[];
  receivedChildData!: any;
  sampleDetails!: any[];
  packageS!: any[];

  constructor(private service:JobBookingService ,private dataService:SampleDataService,private form:FormBuilder)
  {

   
  }

  @Input() headers:any 
  company!: any[] ;
  customer!:any[];
  countries!:any[];
  companyArray!:any;
  reciver!:any
  filteredOrder!:any;
  customerReference!:any;
  inputValue!:string;
  orderArray!:any;
  @Output() arrrayFilteredChanged = new EventEmitter<any[]>()
  @Output() companyvalueToParent =new EventEmitter<any>();
  @Output() reciverCustomer = new EventEmitter<any[]>()
  @Output() productListToPcomponent = new EventEmitter<any[]>()

  ngOnInit(): void {
  // console.log(this.headers,"This is headers from jobComponent");
  // console.log(this.headers.value);

  const fieldName = "customerReference";
  this.company =this.dataService.company;
  this.customer=this.dataService.customer
  this.countries=this.dataService.countries;
  this.sampleDetails=this.dataService.sampleDetails;
  this.customerReference=this.dataService.customerReference;
  this.packageS=this.dataService.packageS;
  // console.log(this.company," this is company");
  // console.log(this.customer," this is customr");
  // console.log(this.countries,"this is countries");
  // console.log(this.sampleDetails,"this is sample");
  
  this.headers.get('customerName').valueChanges.subscribe((value: any) => {
  this.headers.get('companyName').setValue(value);

  
 

// console.log(this.customer);
  
});
this.getDetailsOfOrder()
this.subscribeToOrderChanges()


}
  
selectedCustomerName:any;
selectedCompanyName:any;


onCompany1SelectionChange() {

  const selectedCustomerId = this.headers.get('customerName').value;
  const correspondingCompany = this.customer.find(company => company.id === selectedCustomerId);
  this.arrrayFiltered = correspondingCompany;
  this.arrrayFilteredChanged.emit(this.arrrayFiltered);
  // console.log('this is arrayfiltered',this.arrrayFiltered);
  if (correspondingCompany) {
    this.headers.get('companyName').setValue(correspondingCompany.id);
    this.onCompanyChange()
  }
}

onCompanyChange(){
  const selectedCompanyId = this.headers.get('companyName').value;
  const correspondingcompanyName=this.company.find((companyName:any)=>companyName.id==selectedCompanyId)
  this.companyArray=correspondingcompanyName;
  this.companyvalueToParent.emit(this.companyArray)
}

// onCustomerReferenceChange(event: any) {
//   const orderNumber = event.target.value.trim(); 

//   if (orderNumber === orderNumber) {
//     const correspondingCustomer = this.sampleDetails.filter((customer: any) =>
//       customer.orderNumber === orderNumber
//     );

//     console.log("Corresponding customers:", correspondingCustomer);

//     this.reciver = correspondingCustomer;
//     this.reciverCustomer.emit(this.reciver);
//   }
// }




subscribeToOrderChanges() {
  this.headers.get('customerReference').valueChanges.subscribe((value: any) => {
    this.filteredOrder = this._filterOrder(value);
    // console.log(this.filteredOrder, "this is filtered value");
    this.getDetailsOfOrder();
  });
  
}


onOptionSelected(){
  this.reciver = this.filteredOrder;
  this.reciverCustomer.emit(this.reciver)
  this.getDetailsOfOrder();
}


getDetailsOfOrder(){
  const selectedOrder = this.headers.get('customerReference').value;
  const orderNumbers = this.customerReference.find((data:any)=>data.orderNumber.toLowerCase() === selectedOrder)
  // console.log(orderNumbers,"this is name order numbers");
  if(orderNumbers){
    this.orderArray=orderNumbers.orderId
    console.log( "this is ordernumber array",this.orderArray);
    this.productListToPcomponent.emit(this.orderArray)
  }
}



private _filterOrder(value: string): any[] {
  const filterValue = value.toLowerCase();
  return this.sampleDetails.filter((detail:any) =>
  detail.orderNumber.toLowerCase().includes(filterValue)
);
}

}
