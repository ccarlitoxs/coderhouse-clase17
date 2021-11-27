import  mongoose  from "mongoose";


const carritoSchema = new mongoose.Schema(
    {
        productos: [
            {
                ref:'Productos',
                type:mongoose.Schema.Types.ObjectId,
                
            },
            
        ],
        cantidad: {type:Number}
    },
    {
		timestamps: true,
	},

)

export default mongoose.model('Carritos',carritoSchema)