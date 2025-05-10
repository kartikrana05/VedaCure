import mongoose  from "mongoose";
const DoctorSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    specialization:{type:String,required:true},
    experience:{type:Number,required:true}, 
    phone:{type:String,required:true},
    address:{type:String,required:true},
    licenseNumber:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
})
export default mongoose.model('Doctor',DoctorSchema);