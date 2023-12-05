const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
    
    companyName:String,
    customerName:String,
    customerReference:String,
    freightReadBy:String,
    reciverReference:String

});

const SenderSchema = new Schema({
   
    Name:String,
    building:String,
    city:String,
    contactPerson:String,
    country:String,
    email:String,
    mobile:String,
    phone:String,
    pickupInstruction:String,
    postCode:String,
    senderAddressId:String,
    state:String,
    street:String,
    streetNo:String,
    subRub:String
  
});

const ReciverSchema = new Schema({
    
    Name:String,
    building:String,
    city:String,
    contactPerson:String,
    country:String,
    email:String,
    mobile:String,
    phone:String,
    pickupInstruction:String,
    postCode:String,
    senderAddressId:String,
    state:String,
    street:String,
    streetNo:String,
    subRub:String
  
});


const ProductItemSchema = new Schema({
   
    cubic:String,
    height:String,
    length:String,
    package:String,
    packageType:String,
    remarks:String,
    units:String,
    weight:String,
    width:String
});

// Define the main Form schema that includes nested schemas
const MainFormSchema = new Schema({
  header: HeaderSchema,
  sender: SenderSchema,
  reciver: ReciverSchema,
  product: [ProductItemSchema],

});


const jobdata = mongoose.model('MainForm', MainFormSchema);
module.exports = jobdata;
