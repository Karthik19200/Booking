import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { JobBookingService } from 'src/app/service/job-booking.service';
import { SampleDataService } from 'src/app/service/sample-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() jobBookingForm: any;
  @Input() receivedArray: any[] = []
  @Input() recivedCompanyId: any[] = []
  @Input() productListId: any[]=[];
  @Input() product:any;
  // @Input() isProductFormDisabled:boolean | undefined
  packageType!: any[];
  productArray!: any[];
  productForm!: FormGroup;
  productsF!: FormGroup;
  packageS!: any;
  defaultWeight!: any;
  cubicValue!: any;
  arrrayFiltered!: any[];
  packageTypee!: any[]
  arrrayFilteredChanged = new EventEmitter<any[]>()
  originalPackageS!: any[];
  index:any=0;
  customerReference!: any[];
  @Input() isProductFormDisabled:boolean | undefined
  
  constructor(private dataService: SampleDataService, private formBuilder: FormBuilder, private jobService: JobBookingService) {

  }


  ngOnInit(): void {
    this.receivedArray
    // console.log(this.jobBookingForm, "This is products");
    console.log(this.jobBookingForm.get('product')?.controls, "this is jobooking controls");
    // console.log(this.filteredPackage, 'this is filteredpackage');
    // this.packageType = this.dataService.packageType;
    this.productForm = this.jobService.productsF()
    this.packageS = this.dataService.packageS
    // console.log('this is packageS', this.packageS);
    this.packageTypee = this.dataService.packageType
    // console.log("this is pack array", this.packageTypee);
    // console.log('this is arrayfiltered',this.arrrayFiltered) 
    this.originalPackageS = [...this.packageS];
    this.customerReference=this.dataService.customerReference
    

  }



  addProducts() {
    const newProduct = this.jobService.productsF(); // Assuming this returns a FormGroup for a single product
    const productControl = this.jobBookingForm.get('product') as FormArray;
    productControl.push(newProduct);
  }

  deleteProduct(index: number) {
    const productControl = this.jobBookingForm.get('product') as FormArray;
    productControl.removeAt(index);
  }

  onPackageTypeSelectionChange(selectedId: string, index: number) {
    
    const selectedPackage = this.packageS.find((p: any) => p.Id === selectedId);

    if (selectedPackage) {
      const unitControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('units');
      unitControl?.setValue(selectedPackage.units)
      const weightControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('weight');
      weightControl?.setValue(selectedPackage.weight)
      const cubicControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('cubic');
      const cubicValue = selectedPackage.weight / selectedPackage.cubic;
      cubicControl?.setValue(cubicValue.toFixed(3))
      const lengthControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('length')
      lengthControl?.setValue(selectedPackage.length)
      const widthControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('width')
      widthControl?.setValue(selectedPackage.width)
      const heightControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('height')
      heightControl?.setValue(selectedPackage.height)
      const packageTypeControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('packageType')

      packageTypeControl?.setValue(selectedPackage.packageType);
      // console.log("this is package type", packageTypeControl?.value);
      this.defaultWeight = selectedPackage.dweight;
      // console.log("this is dfault weight", this.defaultWeight);


      this.cubicValue = selectedPackage.cubic
      const sideLength = Math.pow(this.cubicValue, 1 / 3)
      console.log("this is sideLength", sideLength);

       (this.jobBookingForm.get('product') as FormArray).at(index).get('length')?.setValue(sideLength.toFixed(2)),
       (this.jobBookingForm.get('product') as FormArray).at(index).get('width')?.setValue(sideLength.toFixed(2)),
       (this.jobBookingForm.get('product') as FormArray).at(index).get('height')?.setValue(sideLength.toFixed(2))

    }
    const selectedPackageType = this.packageTypee.find((x: any) => x.id == selectedId)
    if (selectedPackageType) {
      (this.jobBookingForm.get('product') as FormArray).at(index).get('packageType')?.setValue(selectedPackageType.packageType)
    }

   
    // const selectedPackageType
  }

  onUnitsChange(index: number) {
    const unitControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('units')
    if (unitControl) {
      const unitValue = unitControl.value;
      console.log("Unit Control's value:", unitValue);
      const weightControl = this.defaultWeight * unitValue;
      const cubicControl = weightControl / this.cubicValue;
      console.log("this is cubic value", cubicControl.toFixed(3));
      console.log(+weightControl.toFixed(2));
      if (weightControl) {
      (this.jobBookingForm.get('product') as FormArray).at(index).get('weight')?.setValue(weightControl.toFixed(2)),
      (this.jobBookingForm.get('product') as FormArray).at(index).get('cubic')?.setValue(cubicControl.toFixed(3))
      const sideLength = Math.pow(cubicControl, 1 / 3) *100;
      console.log("this is sideLength", sideLength);

     (this.jobBookingForm.get('product') as FormArray).at(index).get('length')?.setValue(sideLength.toFixed(2)),
     (this.jobBookingForm.get('product') as FormArray).at(index).get('width')?.setValue(sideLength.toFixed(2)),
     (this.jobBookingForm.get('product') as FormArray).at(index).get('height')?.setValue(sideLength.toFixed(2))
    }
    }
    
  }

  calculateDimensions(index:number){

    const cubicValue = (this.jobBookingForm.get('product') as FormArray).at(index).get('cubic')?.value
    const sideLength = Math.pow(cubicValue, 1 / 3)
    console.log("this is sideLength", sideLength);

     (this.jobBookingForm.get('product') as FormArray).at(index).get('length')?.setValue(sideLength.toFixed(2)),
     (this.jobBookingForm.get('product') as FormArray).at(index).get('width')?.setValue(sideLength.toFixed(2)),
     (this.jobBookingForm.get('product') as FormArray).at(index).get('height')?.setValue(sideLength.toFixed(2))

  }
  


  onInputBlur(index: number) {
    const weightControl = (this.jobBookingForm.get('product') as FormArray).at(index).get('weight');
    if (weightControl) {
      let onBlurValue = parseFloat(weightControl.value).toFixed(2); // Declare onBlurValue here
      weightControl.setValue(onBlurValue);
    }
  }

  disableFormArray(formArray: FormArray) {
    formArray.controls.forEach(control => {
      control.disable();
    });
  }
  
  enableFormArray(formArray: FormArray) {
    formArray.controls.forEach(control => {
      control.enable();
    });
  }

  // calculateSideLength(index:number){
  //   const sideLength = Math.pow(this.cubicValue,1/3)
  //   console.log("this is sideLength",sideLength); 
  //   (this.jobBookingForm.get('product') as FormArray).at(index).get('length')?.setValue(sideLength.toFixed(4))
  // }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['recivedCompanyId'] && changes['recivedCompanyId'].currentValue) { 
      if (this.originalPackageS) {
        const packageType = this.originalPackageS.filter((x: any) => x.companyId == this.recivedCompanyId[0].companyId);
        if (packageType) {
          // console.log("this is pack from recivedCompany", packageType);
          this.packageS = packageType
        }
      }
    }


    if(this.productListId){
      const filteredProductList=this.originalPackageS.filter((x:any)=>x.orderId ==this.productListId)
      // console.log(filteredProductList,"this is product list from packages");
      const packageType=filteredProductList.filter((x:any)=>x.package)
      // console.log(packageType);
      this.packageS = packageType
      // console.log("this is packages",this.packageS);  
    }
    
    if (this.productListId) {
      const filteredProductListFromC = this.customerReference.find((x: any) => x.orderId == this.productListId);
      console.log("this is filtered product", filteredProductListFromC.packageList);
    
      if (filteredProductListFromC && filteredProductListFromC.packageList) {
        for (let i = 0; i < filteredProductListFromC.packageList.length; i++) {
          const currentItem = filteredProductListFromC.packageList[i];
          console.log( "this is current item",currentItem);
          
          
          const packageFromPackageList = currentItem.id;
          const matchedPackage = this.packageS.find((pkg: any) => pkg.id === packageFromPackageList);      

          if (matchedPackage) {
            const packages = (this.jobBookingForm.get('product') as FormArray).at(i).get('package')?.setValue(matchedPackage.package);
          console.log(packages); 

          this.onPackageTypeSelectionChange(packageFromPackageList, i)

          }
 
          const unitControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('units');
          unitControl?.setValue(currentItem.units)
          const weightControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('weight');
          weightControl?.setValue(currentItem.weight)
          const cubicControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('cubic');
          const cubicValue = currentItem.weight / currentItem.cubic;
          cubicControl?.setValue(cubicValue.toFixed(3))
          const lengthControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('length')
          lengthControl?.setValue(currentItem.length)
          const widthControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('width')
          widthControl?.setValue(currentItem.width)
          const heightControl = (this.jobBookingForm.get('product') as FormArray).at(i).get('height')
          heightControl?.setValue(currentItem.height)
          this.cubicValue = currentItem.cubic
          const sideLength = Math.pow(this.cubicValue, 1 / 3)
          console.log("this is sideLength", sideLength);

       (this.jobBookingForm.get('product') as FormArray).at(i).get('length')?.setValue(sideLength.toFixed(2)),
       (this.jobBookingForm.get('product') as FormArray).at(i).get('width')?.setValue(sideLength.toFixed(2)),
       (this.jobBookingForm.get('product') as FormArray).at(i).get('height')?.setValue(sideLength.toFixed(2))
       
       if (currentItem && i !== filteredProductListFromC.packageList.length - 1) {
        this.addProducts(); 
      }   
        }
      }
     
    } 
    
    if (changes['isProductFormDisabled']?.currentValue) {
      this.disableFormArray(this.product) 
    } else {
      this.enableFormArray(this.product)
    }

}

}
