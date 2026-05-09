import { Schema,model } from 'mongoose'
//create product schema


const productSchema = new Schema({
    productName: { 
        type: String, 
        required: [true, "name is mandatory"],
        minLength:8
    },
    productId: { 
        type: Number, 
        required: [true, "id is mandatory"],
    },
    price:{
        type: Number, 
        required: [true, "price is mandatory"] ,
        min:10000,
        max:50000
    },
    brandName:{ 
        type: String, 
        required: [true, "Brand is mandatory"] ,
    }
}, { versionKey: false ,
    timestamps:true}
);

//generate UserModel
export const productModel=model("product",productSchema)




// import { Schema,model } from 'mongoose'
// //create user schema
// const productSchema = new Schema({
//   productId: 
//   {
//     type:number,
//     required:[true, "productId is mandatory"],
//     //minLength:8
// },
//   productName: {
//     type: String,
//     required: [true, "productName is mandatory"],
//     //minLength:8
// },
//   price:{
//  type:number,
//   required: [true, "min Price is 10000, max price is 50000"] 
// },
//  brand:{
//   type:String,
//   required:[true,"Brand name is mandatory"]
//  }
// })
// //  {
// //     versionKey: false ,
// //     timestamps:true
// // }
// // );


// // //generate UserModel
// // export const userModel=model("user",userSchema)




                                