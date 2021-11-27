import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
    {
     nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
       }, 
    descripcion:{
        type:String,
        required:true,
    },
    codigo:{
        type:Number,
        required:true,
    },
    foto:{
        type:String,
        required:false,
    },
    precio:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    },
    {
		timestamps: true,
	},
)

export default mongoose.model('Productos',productoSchema)