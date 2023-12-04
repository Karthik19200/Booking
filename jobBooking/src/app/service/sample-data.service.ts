import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  companyIdValue:any
  // Array of sample objects
  company: any[] = [
    { companyName: 'PostHaste ', id:'1', companyId:'1' },
    { companyName: 'PBT Transport', id:'2',companyId:'2' },
    { companyName: 'Asis Global', id:'3' , companyId:'3'},
  ];

  customer: any[] = [
    { 
     companyName: 'PostHaste(PMA)',
     id:'1',
     },
    { 
    companyName: 'PBT Transport(PMA)', 
    id:'2',
   },

    { 
    companyName: 'Asis Global(PMA)',
     id:'3', 
    },
        
     {
      companyName:'PBT carrier',
      id:'4',
     }   
    // Add more objects as needed
  ];

  // Array for countries
  countries:any[]=[
    {countryName:'India'},
    {countryName:'New Zeland'},
    {countryName:'Australia'},
    {countryName:'England'},
    {countryName:'Usa'},
    {countryName:'China'},
    {countryName:'South Africa'},
    {countryName:'Netherlands'},
    {countryName:'Afganisthan'},
    {countryName:'Pakistan'},
  ]

  sampleDetails:any[]= [
    {
      groupId:"1",
      id:"11",
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '1234567890',
      street: 'Main Street',
      streetNo: '123',
      city: 'gdh dghd s',
      postcode: '12345',
      state:"samplestate",
      building:"starbucks 9th floor",
      contactperson:"joe smith",
      subrub:"testcase",
      mobile:"8994984984",
      address:'123 Main Street, Cityville, State, Zip Code ', 
      orderNumber:"123mn",
    },
    {
      groupId:"2",
      id:"12",
      name: 'Alice Smith',
      email: 'alice@example.com',
      phoneNumber: '9876543210',
      street: 'Oak Avenue',
      streetNo: '456',
      city: 'Otherville',
      postcode: '54321',
      state:"samplestate",
      building:"starbucks 9th floor",
      contactperson:"joe smith",
      subrub:"testcase",
      mobile:"8994984984",
      address:'456 Elm Street, Townsville, State, Zip Code',
      orderNumber:"124mn",
    },
    {
      groupId:"3",
      id:"13",
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phoneNumber: '7890123456',
      street: 'Elm Street',
      streetNo: '789',
      city: 'Sometown',
      postcode: '67890',
      state:"samplestate",
      building:"starbucks 9th floor",
      contactperson:"joe smith",
      subrub:"testcase",
      mobile:"8994984984",
      address:'789 Oak Avenue, Villagetown, State, Zip Code',
      orderNumber:"125mn",
    },
 
    {
      groupId:"3",
      id:"15",
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phoneNumber: '4567890123',
      street: 'Pine Road',
      streetNo: '1213',
      city: 'Newville',
      postcode: '45678',
      state:"samplestate",
      building:"starbucks 9th floor",
      contactperson:"joe smith",
      subrub:"testcase",
      mobile:"8994984984",
      address:'866  Avenue, Villagetown, State, Zip Code',
      orderNumber:"126mn",
    }
  ];
 


  packageS:any[]=
  [
    {
      Id:"1",
      orderId:"1",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A2-A2",
      cubic:"800",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"1"
    },
    {
      Id:"1",
      orderId:"2",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A2-A2",
      cubic:"800",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"2"
    },
    {
      Id:"1",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A2-A2",
      cubic:"800",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"3"
    },
    {
      Id:"2",
      orderId:"1",
      units:"1",
      weight:"10.00",
      dweight:"10.00",
      package:"A3-A3",
      cubic:"1200",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"1"
    },
    {
      Id:"2",
      orderId:"2",
      units:"1",
      weight:"10.00",
      dweight:"10.00",
      package:"A3-A3",
      cubic:"1200",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"2"
    },
    {
      Id:"2",
      units:"1",
      weight:"10.00",
      dweight:"10.00",
      package:"A3-A3",
      cubic:"1200",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"3"
    },
    {
      Id:"3",
      orderId:"3",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A4-A4",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"1"
    },
    {
      Id:"3",
      orderId:"2",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A4-A4",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"2"
    },
    {
      Id:"3",
      orderId:"1",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A4-A4",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"3"
    },
    {
      Id:"4",
      orderId:"4",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A5-A5",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"1"
    },
    {
      Id:"4",
      orderId:"3",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A5-A5",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"2"
    },
    {
      Id:"4",
      orderId:"2",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A5-A5",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"satchels",
      remarks:"",
      companyId:"3"
    },
    {
      Id:"5",
      units:"1",
      orderId:"2",
      weight:"5.00",
      dweight:"5.00",
      package:"Box 1 - Box2",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"box",
      remarks:"",
      companyId:""
    },
    {
      Id:"5",
      orderId:"4",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"Box 1 - Box2",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"box",
      remarks:"",
      companyId:"",
      
    },
    {
      Id:"6",
      orderId:"4",
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"Box 3 - Box4",
      cubic:"1000",
      length:"",
      width:"",
      height:"",
      packageType:"box",
      remarks:"",
      companyId:"3"
    }
  ]

  packageType:any[]=[
    {packageType:"satchels",id:"1"},
    {packageType:"satchels",id:"2"},
    {packageType:"satchels",id:"3"},
    {packageType:"satchels",id:"4"},
    {packageType:"Box",id:"5"},
    {packageType:"Box",id:"6"},
  ]


  customerReference:any[]=[
   {
    orderNumber:"123MN",
    orderId:"1",
    adressId:"2",
    packageList:[
    {
    id:"1",
    units:"1",
    weight:"5.00",
    dweight:"5.00",
    package:"A4-A4",
    cubic:"1000",
  },
  {
    id:"2",
    units:"2",
    weight:"5.00",
    dweight:"5.00",
    package:"box-box",
    cubic:"1000",
  }
  ]
  },
  {
    orderNumber:"124MN",
    orderId:"2",
    adressId:"2",
    packageList:[
      {
      units:"1",
      weight:"5.00",
      dweight:"5.00",
      package:"A4-A4",
      cubic:"1000",
      length:"",
      width:"",
      height:""
    },
    {
      units:"1",
    weight:"5.00",
    dweight:"5.00",
    package:"A2-A2",
    cubic:"1000",
    length:"",
    width:"",
    height:""
    }
  ]
  },
  {
    orderNumber:"125MN",
    orderId:"3",
    adressId:"3",
    packageList:[]
  },
  {
    orderNumber:"126MN",
    orderId:"4",
    adressId:"4",
    packageList:[]
  },
  {
    orderNumber:"127MN",
    orderId:"5",
    adressId:"5",
    packageList:[]
  }
  ]
  constructor() { }


}
